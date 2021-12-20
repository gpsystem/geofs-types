declare namespace chat {
  let maxNumberMessages: number;
  function init(): void;
  function showInput(): void;
  function hideInput(a: boolean): void;
  // TODO multiplayer
  function publish(a: unknown): void;
  function removeUserMessages(a: string): void;
  function hide(): void;
  function show(): void;
}

export default chat;
