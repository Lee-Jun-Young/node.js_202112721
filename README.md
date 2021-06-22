# node.js_202112721


## BASE URL
[http://3.37.146.242:3000/](http://3.37.146.242:3000/)


--------------------------

## :clipboard: 전체 보기
항목|설명
---|---|
URL|/|
예시|/|
요청 메소드|GET|  


#### 응답 메시지(JSON)
```
[
    {
        "id": 20,
        "title": "기말과제",
        "content": "노드 기말과제",
        "date": "2021-06-23",
        "createdAt": "2021-06-22 06:08:56",
        "updatedAt": "2021-06-22 06:08:56"
    }
]
```

--------------------------

## :clipboard: 상세 보기
항목|설명
---|---|
URL|/edit/:id|
예시|/edit/20|
요청 메소드|GET|

#### 응답 메시지(JSON)
```
[
    {
        "id": 20,
        "title": "기말과제",
        "content": "노드 기말과제",
        "date": "2021-06-23",
        "createdAt": "2021-06-22 06:08:56",
        "updatedAt": "2021-06-22 06:08:56"
    }
]
```

--------------------------

## :clipboard: 추가 하기
항목|설명
---|---|
URL|/insert|
예시|/insert|
요청 메소드|POST|

#### 요청 메시지(JSON)
```
[
    {
        "title": "노드",
        "content": "노드기말과제",
        "date": "2021-06-24"
    }
]
```

--------------------------

## :clipboard: 수정 하기
항목|설명
---|---|
URL|/edit/:id|
예시|/edit/20|
요청 메소드|PUT|

#### 요청 메시지(JSON)
```
[
    {
        "id": 20,
        "title": "노드 수정",
        "content": "노드기말과제 수정",
        "date": "2021-06-25"
    }
]
```

--------------------------

## :clipboard: 삭제 하기
항목|설명
---|---|
URL|/delete/:id|
예시|/delete/20|
요청 메소드|DELETE|


--------------------------

## database 설계

#### Table name : 
  DIARies
#### Columns:
  id : int AI PK   
  title : varchar(255)   
  content : varchar(255)   
  date : varchar(255)   
  createdAt : datetime   
  updatedAt : datetime  
