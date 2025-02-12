import {useInfiniteQuery, useQuery} from "@tanstack/react-query"

const endpoint = "https://pokeapi.co/api/v2"

type API = {
    '/pokemon?limit=21':{
        count: number,
        next: string | null,
        results:{name:string, url:string}[],
    }
}

export function useFetchQuerry<T extends keyof API>(path:string) {
    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            await wait(1)
            return fetch(endpoint + path).then(r => r.json() as Promise<API[T]>)
        }
    })
}
export function useInfiniteFetchQuerry<T extends keyof API>(path:string){
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({pageParam}) => {
            await wait(1)
            return fetch(pageParam,{
                headers:{
                    Accept: "application/json",
                }
            }).then(r => r.json() as Promise<API[T]>)
        },
        getNextPageParam:(lastPage) => {
            if ("next" in lastPage) {
                return lastPage.next
            }
            return null
        }
    })
}
function wait(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration))
}