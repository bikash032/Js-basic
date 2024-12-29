/* there are mainy types of function. now we are talking about specific function that are mostly used in java script
some are we are going to describe here:
1. recursive function====>>
as some time  we  need to call the function itself for its own use then such types of function is called as the recoursive function

as if we cannot make the recursive function properly then it creates the infinite loop.
 uses of recursive function
 1. lets take a example for generatiing logic for the random numbers or name that we must need to check in the data base system and 
 that number must be unique among the data base inside system 

 now  first lets make the function 
and that number or name that we must to find the unique need to passing to the argument space 
as we got the number is "123" that must we need to check inside the data base inside system then first we need find the number as
it exist or not and as result if it is inside the it gives true and if  not then false .
now we need to let exist = true if it exist
and if doesnt exist then it return as "doesnot exists"
i.e if(!exist){return "doesnotexists"}
now if we find that number exist then we can add there 1 with that number
i,e else { number+=1}
and check that other also repeating the same logic for multiple time 
 */
const bikash = (number) => {
    let exist = true;
    if (!exist) {
        return "doesnot exists";

    } else {
        number += 1;
        exist = true;
        if(!exist){
            number+=1;
            exist=true;}
            else {
                number += 1;
                exist = true;
                if(!exist){
                    number+=1;
                    exist=true;
                }
            }
        }
    }

bikash(123)
/*as above the logic is repeating from line number 27 to 38 for the multiple time, now here we can call the function itself for 
checking value logic to overcome. ie is in line no 54
*/
const bikash1 = (number) => {
    let exist = true;  // as inside here  we can send any types of the query for data base system.
    if (!exist) {
        return "doesnot exists";

    } else {
        bikash1(number);
        }
    }

bikash(123)
// procedure for the above function executing as 
// we passing the number "123" inside that function which is recive by (number) of line no 48 now it will check that number and
// if it does exist then it will give to line no 53 else and then it wll add for that number by 1 and again pass that until 
// that having unique. so at last it will give the unique value at the end. that is espically need in the data base giving  new 
// unique name or number. 


// now for line no 51 lets  make twist that to have unique name or number that  if we replace for "return exists"===> "number"
// then that function will run until it finds the unique numbber.




