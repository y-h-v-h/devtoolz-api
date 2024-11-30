import { collections } from "@hypermode/modus-sdk-as";

// BASH
@json
export class NaturalLanguageToBashCommandResult {

  @alias("bashCommand")
  bashCommand!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("bashCommand-collection-mutation-result")
  bashCommandCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}


@json
export class BashCommandToNaturalLanguageResult {

  @alias("naturalLanguage")
  naturalLanguage!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("regex-collection-mutation-result")
  bashCommandCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}

// REGEX
@json
export class NaturalLanguageToRegexResult {

  @alias("regex")
  regex!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("regex-collection-mutation-result")
  regexCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}


@json
export class RegexToNaturalLanguageResult {

  @alias("naturalLanguage")
  naturalLanguage!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("regex-collection-mutation-result")
  regexCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}

// GIT
export class NaturalLanguageToGitCommandResult {

  @alias("gitCommand")
  gitCommand!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("git-command-collection-mutation-result")
  gitCommandCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}


@json
export class GitCommandToNaturalLanguageResult {

  @alias("naturalLanguage")
  naturalLanguage!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("git-command-collection-mutation-result")
  gitCommandCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}

// SQL
@json
export class NaturalLanguageToSQLQueryResult {

  @alias("sqlQuery")
  sqlQuery!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("sql-query-collection-mutation-result")
  sqlQueryCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}


@json
export class SQLQueryToNaturalLanguageResult {

  @alias("naturalLanguage")
  naturalLanguage!: string;


  @alias("natural-language-collection-mutation-result")
  naturalLanguageCollectionMutationResult: collections.CollectionMutationResult | null =
    null;


  @alias("sql-query-collection-mutation-result")
  sqlQueryCollectionMutationResult: collections.CollectionMutationResult | null =
    null;
}
