import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


// Define the User interface for user data
interface User{
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Fetch details for a specific user 
const useFetchUserInfo = ({ id }: { id: number })=> useQuery<User>({
  queryKey:['posts',id],
  queryFn:()=>axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.data)
})
export default useFetchUserInfo;





















// interface Stock{
//     ticker:string,
//     price:number,
//     change_amount:number,
//     change_percentage:number,
//     volume:number
// }

// const FetchStockInfo = ({ ticker }: { ticker: string })=> useQuery<Stock,Error>({
//     queryKey:['posts',ticker],
//     queryFn:()=>axios
//       .get(`https://jsonplaceholder.typicode.com/users/${ticker}`)
//       .then((res)=>res.data.top_gainers)
//   })
//   export default FetchStockInfo;