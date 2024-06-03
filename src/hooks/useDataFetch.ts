import { useState } from "react";
import { AxiosRequestConfig } from "axios";
import dispatcher from "@/lib/api/dispatcher";

export default function useDataFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const axiosFetcher = async (options: AxiosRequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await dispatcher({ ...options });
      return response;
    } catch (err: any) {
      setError(err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, axiosFetcher };
}
