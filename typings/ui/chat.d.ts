/**
 * Can be accessed with `ui.chat`.
 * @module chat
 * @category ui
 */
import { ServerResponse } from "../multiplayer";

export let maxNumberMessages: number;
export function init(): void;
export function showInput(): void;
export function hideInput(a: boolean): void;

export function publish(a: typeof ServerResponse.chatMessages[number]): void;
export function removeUserMessages(a: string): void;
export function hide(): void;
export function show(): void;
