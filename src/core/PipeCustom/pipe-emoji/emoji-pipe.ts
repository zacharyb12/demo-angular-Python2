import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: string): string {

    /*
    Remplace certains mots par des emojis correspondants.
    le G precise que l'on remplace toutes les occurrences
    le i precise que la recherche n'est pas sensible à la casse
    */
    return value
    .replace(/chien/gi, ' 🐶')
    .replace(/chat/gi, '🐱')
    .replace(/pizza/gi, ' 🍕')
    .replace(/soleil/gi, ' ☀️')
    .replace(/lune/gi, ' 🌙')
    .replace(/étoile/gi, ' ⭐')
    .replace(/coeur/gi, ' ❤️')
    .replace(/feu/gi, ' 🔥')
    .replace(/fleur/gi, ' 🌸')
    .replace(/arbre/gi, ' 🌳')
    .replace(/pluie/gi, ' 🌧️')
    .replace(/neige/gi, ' ❄️')
    .replace(/vent/gi, ' 💨')
    .replace(/musique/gi, ' 🎵')
    .replace(/danser/gi, ' 💃')
    .replace(/danser/gi, ' 💃')
    .replace(/sport/gi, ' 🏀')
    .replace(/foot/gi, ' ⚽')
    .replace(/tennis/gi, ' 🎾')
    .replace(/vélo/gi, ' 🚴')
    .replace(/voiture/gi, ' 🚗')
    .replace(/bus/gi, ' 🚌')
    .replace(/train/gi, ' 🚆')
    .replace(/avion/gi, ' ✈️')
    .replace(/bateau/gi, '🚢')
    .replace(/maison/gi, '🏠')
    .replace(/ordinateur/gi, '💻')
    .replace(/téléphone/gi, '📱')
    .replace(/livre/gi, '📖')
    .replace(/stylo/gi, '🖊️')
    .replace(/école/gi, '🏫')
    .replace(/travail/gi, '💼')
    .replace(/argent/gi, '💰')
    .replace(/banque/gi, '🏦')
    .replace(/nourriture/gi, '🍽️')
    .replace(/gâteau/gi, '🎂')
    .replace(/chocolat/gi, ' 🍫')
    .replace(/café/gi, ' ☕')
    .replace(/thé/gi, ' 🍵')
    .replace(/eau/gi, ' 💧')
    .replace(/bière/gi, ' 🍺')
    .replace(/vin/gi, ' 🍷')
    .replace(/amour/gi, ' 💘')
    .replace(/santé/gi, ' 🏥')
    .replace(/médecin/gi, ' 👨‍⚕️')
    .replace(/malade/gi, ' 🤒')
    .replace(/rire/gi, ' 😂')
    .replace(/triste/gi, ' 😢')
    .replace(/colère/gi, ' 😠')
    .replace(/surprise/gi, ' 😲')
    .replace(/fatigué/gi, ' 😴')
    .replace(/heureux/gi, ' 😄')
    .replace(/bonjour/gi, ' 👋')
    .replace(/au revoir/gi, ' 👋')
    .replace(/merci/gi, ' 🙏')
    .replace(/oui/gi, ' 👍')
    .replace(/non/gi, ' 👎');
  }

}
