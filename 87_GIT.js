/*
****************GIT INTRODUCTION************

When we working on the company to make the flow of the working balanced and to share the block of the code within the team, we can use 
this type of the application. As this is the imprtant for each and most of the company for the deoloyation and to edit each other block of 
code. 

for this we need to install first the git latest verson to our pc
to varyfy we can run command inside the terminal of the laptop or as powercell of the window  
      git -v
      this will give the latest verson of the git inside of our pc



      as when we clone any things from any of the reposotary first it need to be in public or if there is private then we need to be accesiable 
      by adding of them in the group list by using gmail id or the github id


there we can do many operation inside of the git they are
1. PUSH OF THE CODE FOR THE NEW REPOSOTARY ====>>
                                           IF some one give you the new reposatory and if the reposatory is empty for that case need to push our 
                                           code then at first we need to init our directory and to be make sure that the used directoty need 
                                           to contain of the git and afer that we need to maintain that reposotary in the file.
this type of the reposatory creation we can do once in one directry as after we are using of the below command that we can use for after of the 
first initialization. They are:



a. git init
b. git remote add origin "url of reposotary"  
       a and b are written once when we start of the particular or the each of the project. new project = new reposatory 
c. git add .  ====> this will push all of the code that are inside of the directory where we initialiaze the git reposotary..git   
              or git add "file name" ==> this will push only the desired of the block of the code fo the particular of the code of the block

d. git commit -m "comment for what you have done for that block of the code" ==> this is most of the important of the block of the code that is 
                                                                               being to be tracked by the other people what you have done while 
                                                                               working in the company 

e. git push ==> before the push of the code we need to pull the code it is because we are working on the team that time many people they are 
     so for this we need to pull the code 
f. git pull origin remote_branch_name  







    HOW TO MAKE THE NEW BRANCH INSIDE REPOSATORY OF THE MAIN BRANCH?
===> for making of the verson control we need to make the new branch and need to do push or pull operation for the workflow of the code without 
the code loss or for maintain of the useability of the code 
 

to make new code ===> git checekout -b new_branch_name ==> this will make new branch with taking all of the code and the properties form the last
                     branch . take all the code and properties of the previous branch
to just switch the pri existing brannch
===>> git checkout branch_to_switch_branch_name  ==> this will just switch the branch but not bring all the code and features of the branch


*******************VVVVVVIIIIIIPPPPP****************
If there is the operation within of the same local remote and branch code of the local directory then it will merge by pulling of the same code
and it will not give any short of the conflict 
syntex======>>> git merge bikash  ===> for this the main branch(current branch=main) will update or merze all the channges that are done within
of the bikash as the remote branch 

now after i merge to my main branches and if there is no one pushes code for the main branch then i can simply 
*********git push origin main********** 


but 

if we want to pull the git reposatory code from git to the local remote branches then if there is same code or logic for the same of the code block
then it will give the conflict for the merzing of the code. 
conflict for the merzaing of the coded



*/