


***********************INDUSTRIAL USE OF THE GIT*****************************
 
While we working on the industrial based approach to bring for the better result we can use as the extension for the git called as

===>>>   Git flow
                while we working on the git we making the different branch depending upon the features of the projects 
                lets have take example of the E-commerce app like daraz

                they have diffrent features like 
                authintication, login, brand creation, banner, catogary, product, order, transaction, offer, delevery and so on
                so depending of this we need create the branches 

         the ideal branch that are looking over all of this modules is 
         1. MAIN BRANCH  ======>>> PRODUCTION RELASE BRANCH THAT ARE NOT USED BY THE ANY OF THE  OF THE EMPLOYEE
                
                
                 2. NIGHTLY SERVER ====>> THIS SERVER IS FOR THE QUALITY TEST OR BUGGING TEST BY THE QA
                          
                         3. DEVELOPER SERVER ====>> This server all of the code by most of the developer deploy for the quality check   
                                 4..FEATURES/ OOP (start)
                                 now we develop the code based on this feature 
                                 ........develope code...........
                                 ........develope code............
                                 ..........develope code...........
                                 features/oop close 
                                 after developing and close of the features as of OOP it will close the feature and then it will merge to
                         3. DEVELOPERS SERVER (MERGE HERE) AND THEN BRANCH IT WILL DELETE AUTOMATICALLY FROM LOCAL HOST.
                                 ====>> 5. FEATURES/ OOP2 (START OF THE NEW BRANCH)
                                 now we develop the code based on this feature 
                                 .......develope code............
                                 .......develope code............
                                 .......develope code............
                                 ===>> features/oop2 close AND SO MANY CODE OTHER FEATURE FROM SAME AS THIS 
                         3. DEVELOPERS SERVER (MERGE HERE) and the branch will delete automatically 
                                
                                 =====>>> 4. RELEASE THE CODE FOR TESTING AFTER HERE
                                     (here we can find out many sorts of the bug and error )
                                     this release got verson like 
                                              ====>>> release1/ 0.0.0.1.0 (start) (as they are refrenced with the verson ID)
                                          ...........fixing of the bug/error..........
                                          ...........fixing of the bug/error..........
                                              ====>> release1/0.0.0.1.0 (close )
                                      
                                  
                                 after close of this server it will merge to ===>>
                         
                         3. DEVELOPERS SERVER (GET MERZED OF RELEASE1/0.0.0.1.0)====>
                
                 2. NIGHTLY SERVER (get merge RELEASE1/0.0.0.1.0    too for this server automatically )
                                 
                                 
                                 IF there is again any error or bugs while for the production time then 
                                 there is another stage callled as:
                                 ====>> HOTFIXES1/0.1.1.0 (start)
                                 .........fixing of error/bug...............
                                 .........fixing of error/bug...............
                                 .........fixing of error/bug...............
                                  ====>> hotfixes1 / 0.1.1.0 (close)

                                 WHEN WE CLOSE THIS HOTFIXES THEN THE CODE AUTOMATICALLY GOES TO DEVELOPERS AND NIGHTLY BRANCH AND AUTOMATICALLY DELETE THE CODE FROM THE HOTFIXES VERSON 
                        
                                 after hotfixing of the code from the nightly server it need to go back to first===>>
                         3. DEVELOPERS SERVER (SENT BACK AS THE FIXED CODE NEED TO BE REQUIRED FOR THE DEVELOPERS ALSO)
                 
                       GET FIXED CODE FROM HERE 
                 2. NIGHTLY SERVER (ALSO GET BACK TO THIS SERVER ALSO)
                              




                        THIS IS THE IDEAL CASE OF THE USING OF THE GIT IN ANY OF
                        THE ORGANIAATION OR COMPANY AND THE DIFFRENCE IS ONLY THE 
                        DIFFRENT NAME OF THE BRANCHES.



                        THE MAIN TASK OF THIS IS TO HANDLE THE CODE AND FLOW BUT ALSO IT WILL BE 
                        SAME AS IF WE CAN USE THE CONCEPT OF THE BRANCHING, PULLING, PUSHING OF THE
                        CODE. AS DEPENDING OF THE COMPANY SOME THEY USE OF THIS GIT FLOW EXTENSION 
                        OR MAY USE THE BRANCHING APPROACH.

 REAL EXAMPLE =>

            1. DELETE ALL OF THE BRANCHES FIRST TO INITAILIAZE THE GIT FLOW
  2. git flow init 
  3. production branch ==> [bikash]
  4. first development branch ==> [develop]
  5. feature branch ===> [features]
  6. relase stage/ branch ====> [release]
  7. bugfix stage/branch  ===> [releseclose]
  8. verson tag prefix===> [V]
  9. hotfixes stage/ branch ===>[hotfixesstart]
  10. hotfixes close / ====>[hotfixesClose]
 
 11. check the branch name bifore where we need to work for
       ====> git branch       (this will show the branch name of where we are going to work for)
                        as if it shows that of the develop branch then it is ok as we are working from the develp branch as we dont touch for 
                      the main or bikash or master branch
        
 12. To make feature where we need to work then we use
      =====>  git flow features start OOP1 (this will make the branch for the working of the features of the )
 13. AFTER FOLLOW ALL OF THE PROCESS TOLD BEFORE 
     


