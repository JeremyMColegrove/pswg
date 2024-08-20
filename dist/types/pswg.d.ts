interface PSWGOptions {
    length?: number;
    excludeSymbols?: boolean;
    excludeNumbers?: boolean;
    excludeUppercase?: boolean;
}
export default function pswg(options?: PSWGOptions): string;
export {};
