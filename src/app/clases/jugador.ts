export class Jugador {
    name: string;
    nick: string;
    age: number;

    constructor(name?: string, nick?: string, age?: number) {
        if (name) {
            this.name = name;
        } else {
            this.name = 'Player1';
        }
        if (nick) {
            this.nick = nick;
        } else {
            this.nick = 'player_1';
        }
        if (age) {
            this.age = age;
        }
      }

}
