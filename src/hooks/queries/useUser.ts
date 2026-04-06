import { useQuery } from "@tanstack/react-query"
import { authApi } from "@/api/auth"

export const useUser = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: false,
  })
}
