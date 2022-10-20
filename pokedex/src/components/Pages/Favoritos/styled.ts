import styled from 'styled-components';

export const Container = styled.div`
  .container{
      width: 100%;
      min-height: 100vh;
      margin:0;
      padding:0;
      text-align: center;
      overflow: hidden;

     h1{
        text-align: center;
        justify-content: center;
        margin: auto;
     }
     .poke-grid{
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(140px, 20rem));
         justify-content: center;
         gap: 1rem;
         padding:1rem;
         
         .poke-grid-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            border-radius: 10px;
            padding: 1rem;
            font-size: 1.5rem;
            cursor: pointer;

            img{
               width: 100%;
               
            }
            
            h5{
               margin-bottom: 0.5rem;
               margin-top: 0.5rem;
            }
            .poke-types-container{
               display: flex;
               justify-content: center;
               align-items: center;
               flex-wrap: wrap;
               width: 100%;
               .poke-types{
                  width: auto;
                  height: auto;
                  margin: 0.3rem;
                  font-size: 0.8rem;
                  font-weight: bold;
                  /* border: 1px solid #999; 
                  border-radius: 10px; */
                  padding: 5px;
               }
               
            }
         }
     }
   }
`;

 