import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe'
})
export class EmojiPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
