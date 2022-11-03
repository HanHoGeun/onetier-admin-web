import React from 'react';
import NavbarTemplate from './Navbar';
// api 작업 및 header import 사용

export default function Navbar () {
    // 추후 api로 menuList 가져옴
    const menuList = [
        {"id":1,"name":"회원 관리","parentId":0,"level":1,"permission":0,"navigateUrl":"/member"},
        {"id":2,"name":"서비스관리","parentId":0,"level":1,"permission":0,"navigateUrl":"/service"},
        {"id":3,"name":"설정","parentId":0,"level":1,"permission":0,"navigateUrl":"/setting"},
        {"id":4,"name":"회원관리","parentId":1,"level":2,"permission":0,"navigateUrl":"/member/mgmt"},
        {"id":5,"name":"이벤트1","parentId":2,"level":2,"permission":0,"navigateUrl":"/service/event1"},
        {"id":6,"name":"이벤트2","parentId":2,"level":2,"permission":0,"navigateUrl":"/service/event2"},
        {"id":7,"name":"이벤트3","parentId":3,"level":2,"permission":0,"navigateUrl":"/service/event3"},
        {"id":8,"name":"운영자 관리","parentId":3,"level":2,"permission":0,"navigateUrl":"/setting/admin/account"},
        {"id":9,"name":"권한 관리","parentId":3,"level":2,"permission":0,"navigateUrl":"/setting/auth/manage"}
    ]
    return <NavbarTemplate
                menuList={menuList}
            />
}
