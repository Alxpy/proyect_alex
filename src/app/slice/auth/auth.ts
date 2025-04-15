export interface InitialStateAuth {
  isLoading: boolean;
  isLoadingCode: boolean;
  user: User | null;
  isAllowed: boolean;
}


export interface User {
  nombre: string
  correo: string
  roles: string[]
}
