export class UseExistingWithEmail extends Error {
  constructor() {
    super('Email already exists!')
  }
}
