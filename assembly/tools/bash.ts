import { models, collections } from "@hypermode/modus-sdk-as";

import {
  OpenAIChatModel,
  SystemMessage,
  UserMessage,
} from "@hypermode/modus-sdk-as/models/openai/chat";

import {
  SECOND_MODEL_NAME,
  NATURAL_LANGUAGE_COLLECTION_NAME,
  BASH_COMMAND_COLLECTION_NAME,
} from "../lib/constants";
import {
  BashCommandToNaturalLanguageResult,
  NaturalLanguageToBashCommandResult,
} from "../lib/types";

export function convertNaturalLanguageToBashCommand(
  instruction: string,
  naturalLanguage: string,
): NaturalLanguageToBashCommandResult {
  const model = models.getModel<OpenAIChatModel>(SECOND_MODEL_NAME);
  const input = model.createInput([
    new SystemMessage(instruction),
    new UserMessage(
      `Convert this natural language to a bash command: ${naturalLanguage}.
      Do not add your own comments. Return only the bash command -
      do not include any other comments, information, context, or explanation.
      Do not format it into html or anything, or wrap in quotes or a string. Just 
      return the bash command. If there are any quotes in the bash command, use single quotes
      instead of double quotes. `,
    ),
  ]);

  input.temperature = 0.7;
  const output = model.invoke(input);

  // embed the natural language and bash command into collection
  const naturalLanguageCollectionMutationResult = collections.upsert(
    NATURAL_LANGUAGE_COLLECTION_NAME,
    null,
    naturalLanguage,
  );

  const bashCommandCollectionMutationResult = collections.upsert(
    BASH_COMMAND_COLLECTION_NAME,
    null,
    output.choices[0].message.content.trim(),
  );

  return {
    bashCommand: output.choices[0].message.content.trim(),
    naturalLanguageCollectionMutationResult:
      naturalLanguageCollectionMutationResult,
    bashCommandCollectionMutationResult: bashCommandCollectionMutationResult,
  };
}

export function convertBashCommandToNaturalLanguage(
  instruction: string,
  bashCommand: string,
  bashCommandIsInCollection: bool,
): BashCommandToNaturalLanguageResult {
  const model = models.getModel<OpenAIChatModel>(SECOND_MODEL_NAME);
  const input = model.createInput([
    new SystemMessage(instruction),
    new UserMessage(
      `Convert this bash command to natural language: ${bashCommand}.
      Do not add your own comments. Return only the natural language -
      do not include any other comments, information, context, or explanation.
      Do not format it into html or anything, or wrap in quotes or a string. Just 
      return the natural language. If there are any quotes in the natural language,
      use single quotes instead of double quotes.`,
    ),
  ]);

  input.temperature = 0.7;
  const output = model.invoke(input);

  if (bashCommandIsInCollection) {
    return {
      naturalLanguage: output.choices[0].message.content.trim(),
      naturalLanguageCollectionMutationResult: null,
      bashCommandCollectionMutationResult: null,
    };
  } else {
    const naturalLanguageCollectionMutationResult = collections.upsert(
      NATURAL_LANGUAGE_COLLECTION_NAME,
      null,
      output.choices[0].message.content.trim(),
    );

    const bashCommandCollectionMutationResult = collections.upsert(
      BASH_COMMAND_COLLECTION_NAME,
      null,
      bashCommand,
    );

    return {
      naturalLanguage: output.choices[0].message.content.trim(),
      naturalLanguageCollectionMutationResult:
        naturalLanguageCollectionMutationResult,
      bashCommandCollectionMutationResult: bashCommandCollectionMutationResult,
    };
  }
}
