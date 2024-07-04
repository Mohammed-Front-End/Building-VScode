export interface IFile {
  name:string,
  isFolder:boolean,
  children?: IFile[], 
  content?:string
}

function factorial (n:number): number{
  if (n <= 1){
    return 1
  }
  return n * factorial(n - 1)
}



console.log(factorial(5));
