import IManger from "./IManger";

export default interface IAnalyzer<T> {
    analyse(data: T, warningManager: IManger): void;
}