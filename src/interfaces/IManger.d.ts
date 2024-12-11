export default interface IManger<T> {
    add(item: T): void;
    remove(item: T): void;
    get(): T[];
}