declare module "prompt-sync" {
  interface Prompt {
    (ask?: string): string;
  }

  function PromptSync(): Prompt;
  export = PromptSync;
}
