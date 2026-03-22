export class UriMatcherResponse {
    constructor() {  }
    getErrorMessages(): Array<any> {
        return [];
    }
    isError(): boolean {
        return false;
    }
    isFragmentMatches(): boolean {
        return false;
    }
    isHostMatches(): boolean {
        return false;
    }
    isMatch(): boolean {
        return false;
    }
    isPathMatches(): boolean {
        return false;
    }
    isSchemeMatches(): boolean {
        return false;
    }
}
