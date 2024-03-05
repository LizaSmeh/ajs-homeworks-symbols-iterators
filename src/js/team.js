export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    const list = Array.from(this.members);
    let current = 0;
    const end = list.length - 1;

    return {
      next() {
        if (current <= end) {
          return {
            done: false,
            value: list[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
