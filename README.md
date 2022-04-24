<em>Get lambda function code and post lambda function code are included in this directory</em> <br>
<em>Note: since guid module is deprecated, I used uuid instead</em>

# REST API - HOW TO USE


## GET METHOD

  Link to the get method: https://80eso32yi3.execute-api.eu-west-2.amazonaws.com/workingStage1/{userid}

  <em>There is a user (under id: "test_id") in the database for testing purposes</em>
  
  Example link: https://80eso32yi3.execute-api.eu-west-2.amazonaws.com/workingStage1/test_id
  
  Expected return:
  ```ts
  {
     "user": {
         "user_id": "test_id",
         "user_age": "test_age",
         "user_name": "test_name"
     }
  }
  ```
  
## POST METHOD
  
  Link to the post method: https://80eso32yi3.execute-api.eu-west-2.amazonaws.com/workingStage1/
  
  Example body: 
  ```ts
  {
    "name":"Tomasz",
    "age":"23"
  }
  ```
  Expected return: 
  ```ts
  {
    "msg": "User created successfully!",
    "new_user_id": "d31200ea-7f2b-487e-8ddb-5d0aebc0a26a"
  }
  ```
