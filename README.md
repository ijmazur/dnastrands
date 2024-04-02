# Application for my BA Thesis: A web-based application for designing DNA strand
Project created for my BA Thesis, a bioinformatics tool focused on DNA sequence analysis. A web application with two main use cases, generating sequences of DNA that are presented to the user in an intuitive manner, ready to be processed into a maker device that allows recording of information. Converting input into bits which is then encrypted using DNA strands.    

**Technological stack and tools used:** Django, React, MaterialUI, PostgreSQL, Redis, Docker, JWT, Postman, DBeaver.

# Testing via Postman:
Authorization is done with JWT, three available URL's 
**/api/token, /api/token/user/, /api/token/refresh/**

By logging in with username and password on **/api/token/** we recieve a response in JSON format of access and refresh tokens:
![8apitoken](https://user-images.githubusercontent.com/11295764/196522201-7e7d9216-fa41-4428-9b0a-374897e435eb.png)

**/api/token/user/** returns user information:
![8apitokenuser](https://user-images.githubusercontent.com/11295764/196522244-a672b654-bdfb-4a8c-8676-3f0b7ed3f4b8.png)

**/api/token/refresh/** returns new access token:
![8apitokenrefresh](https://user-images.githubusercontent.com/11295764/196522272-71627e72-2d0a-4378-9a54-db31f41b87ed.png)

# Backend and Database 
Sending a GET request to /simple-tag/my-tags returns a list of simple-tags created for currently logged in user: 
![8simpletagmytags](https://user-images.githubusercontent.com/11295764/196522325-0b184be3-c965-4493-aa7c-aef781c34f34.png)

Database prior to sending DELETE request to /simple-tag/my-tags/{int:id}/ 
![dbpredelete](https://user-images.githubusercontent.com/11295764/196522410-3e66361e-5db9-4c34-9f10-bbe9bc95dc9a.png)

Information recevied on succession of deleting the record of ID 21 from database
![8mytagsdelete](https://user-images.githubusercontent.com/11295764/196522425-00e4dfe2-dfd1-4d28-90b4-7c33bf5d60a7.png)

Confirming that the record with ID 21 has been deleted:\
![dbafterdelete](https://user-images.githubusercontent.com/11295764/196522437-4a90891f-5708-4322-9c32-8d342628fc86.png)

# Frontend
Login Screen:\
![3login](https://user-images.githubusercontent.com/11295764/196522556-6ffc07f4-5505-4aae-a651-53cfa1d41db6.png)

Registering new user:\
![3register](https://user-images.githubusercontent.com/11295764/196522568-d89697a4-381d-49a0-ab4a-789c6ebb2b40.png)

Showcasing error display of validation of Form Input:\
![3register5](https://user-images.githubusercontent.com/11295764/196522595-18387cf8-80d4-451f-b524-95154c382472.png)\
![3register2](https://user-images.githubusercontent.com/11295764/196522607-1223fc72-28de-46cb-ae83-16aab87de622.png)\
![3register3](https://user-images.githubusercontent.com/11295764/196522616-6bcaf32d-2ba7-4fbc-8287-afbaa570b1ce.png)\
![3register4](https://user-images.githubusercontent.com/11295764/196522634-b2b4b280-9945-43e8-af97-510722811387.png)

Dashboard screen:
![3main](https://github.com/ijmazur/dnastrands/assets/11295764/db7cd4c4-73a5-4d98-bf64-966becc66707)

Dialog box from Generating a Simple Tag:\
![dialogbox](https://user-images.githubusercontent.com/11295764/196522679-ebbe96f7-663f-49e2-b1e8-1199e8d53bef.png)

Dialog box for Generating Bits:\
![3dialogbox](https://github.com/ijmazur/dnastrands/assets/11295764/fa933f14-a96b-43c7-9e3f-3ee9ce760556)

Drawers and Quality of Life settings:\
![tryb1](https://user-images.githubusercontent.com/11295764/196522706-32aaa4f9-f362-4ddd-843a-dda01dcdce41.png)
![drawerin](https://user-images.githubusercontent.com/11295764/196522718-780c7bfe-77eb-4789-a1be-7792032ddcbd.png)
![tryb2](https://user-images.githubusercontent.com/11295764/196522742-87a4b079-4127-4dc4-aad3-696c37ce34e3.png)

Changing from Dark Mode to Light:\
![tryb3](https://user-images.githubusercontent.com/11295764/196522752-58a11e5d-69e9-4e1d-9862-f8eb9639d1ae.png)

Drawer Menu from side:\
![3drawer](https://github.com/ijmazur/dnastrands/assets/11295764/775cdaa4-f9e4-4ae1-a727-c2bbee92300f)

Displaying User history:\
![3history](https://github.com/ijmazur/dnastrands/assets/11295764/ce0e1478-4e82-41bf-89a9-f81f3c189598)\
![3historyID](https://github.com/ijmazur/dnastrands/assets/11295764/bbe33000-817b-4742-b357-7e7bafa7c928)\
![3bit](https://github.com/ijmazur/dnastrands/assets/11295764/bfc4f3fa-2484-4e95-a7e4-0af2304fe027)

Downloading in JSON format:\
![3json](https://github.com/ijmazur/dnastrands/assets/11295764/b20b9bdf-3e08-4264-a491-68c7c273b3a4)\

Editing User Profile details:\
![3profile](https://user-images.githubusercontent.com/11295764/196522856-2b6f7050-9dbd-4c43-943c-8e4ff250bdee.png)

DB before name change:\
![dbbeforname](https://user-images.githubusercontent.com/11295764/196522876-bd7dca01-e30f-4f41-a332-8286a455b48d.png)

DB after name change:\
![dbaftername](https://user-images.githubusercontent.com/11295764/196522895-c958c1e4-05e5-4633-ac13-14cb562a5cef.png)

User profile after the name change in Light Mode:\
![3profileW](https://github.com/ijmazur/dnastrands/assets/11295764/f45ee574-3296-40c8-b343-0fc263dc69c1)
