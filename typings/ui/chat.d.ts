import { ServerResponse } from "../multiplayer";

declare namespace chat {
  let maxNumberMessages: number;
  function init(): void;
  function showInput(): void;
  function hideInput(a: boolean): void;

  function publish(a: typeof ServerResponse.chatMessages[number]): void;
  function removeUserMessages(a: string): void;
  function hide(): void;
  function show(): void;
}

export default chat;
