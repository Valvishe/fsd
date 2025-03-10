import { usePathname, useSearchParams, useRouter, ReadonlyURLSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type SearchParamsHooksType = {
  add: (name: string, value: string) => Promise<void>;
  delete: (paramName: string) => Promise<void>;
  clear: () => Promise<void>;
};

type UseControlSearchParamsType = [ReadonlyURLSearchParams | null, SearchParamsHooksType];

class SearchParamsHooks {
  constructor(
    private router: AppRouterInstance,
    private pathname: string,
    private currentParams: URLSearchParams
  ) {}

  public async add(name: string, value: string): Promise<void> {
    this.currentParams.set(name, value);
    await this.router.push(`${this.pathname}?${this.currentParams}`);
  }

  public async delete(paramName: string): Promise<void> {
    this.currentParams.delete(paramName);
    await this.router.push(`${this.pathname}?${this.currentParams}`);
  }

  public async clear(): Promise<void> {
    await this.router.push(this.pathname);
  }
}

export function useControlSearchParams(): UseControlSearchParamsType {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(String(searchParams).toString());
  const useCustomHooks = new SearchParamsHooks(router, String(pathname), params);

  return [searchParams, useCustomHooks];
}
