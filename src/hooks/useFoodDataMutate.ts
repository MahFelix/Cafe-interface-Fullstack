/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { FoodData } from '../Interface/FoodData';

const API_URL = 'http://localhost:8090';

// Tipagem do retorno da função postData
const postData = async (data: FoodData): Promise<AxiosResponse<any>> => {
    // Usando await para garantir que o axios resolva a promessa
    const response = await axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            // Invalida a consulta 'food-data' para forçar a atualização dos dados
            queryClient.invalidateQueries(['food-data']);
        }
    });

    return mutate;
}

