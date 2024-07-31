import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi I'm Jimyeong! 👋 

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=wlaud2000)](https://github.com/anuraghazra/github-readme-stats)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=wlaud2000&layout=compact&hide=r,jupyter%20notebook,c%23&exclude_repo=roharui.github.io)](https://github.com/anuraghazra/github-readme-stats)

<p align="center">
 <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fwlaud2000&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a></a>
</p>


## 📚Skills
<!-- https://shields.io/ -->
<!-- <img src="https://img.shields.io/badge/쓰고자하는_텍스트-컬러코드?style=flat-square&logo=simpleicons에서_아이콘이름&logoColor=white"/></a> -->

<p align="center">
    <img src="https://img.shields.io/badge/Java-F09820?style=flat-square&logo=coffeescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white"/></a>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/Spring boot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white"/></a> 
</p>
<p align="center">
    <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/></a>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white"/>
</p>


## 🌈Follow me
<p align="center">
<a href="mailto:kimjim1234550@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white"/></a>
<a href="https://www.instagram.com/kjm021221/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white"/></a>
<a href="https://learning-study.tistory.com/"><img src="https://img.shields.io/badge/tistory-000000?style=flat-square&logo=tistory&logoColor=white"/></a>
</p>
<a href="https://github.com/devxb/gitanimals">
  <img
    src="https://render.gitanimals.org/lines/wlaud2000?pet-id=606294867382478883"
    width="220"
    height="200"
  />
</a>
<a href="https://github.com/devxb/gitanimals">
  <img
    src="https://render.gitanimals.org/lines/wlaud2000"
    width="220"
    height="200"
  />
</a>

<a href="https://github.com/devxb/gitanimals">
  <img
    src="https://render.gitanimals.org/lines/wlaud2000?pet-id=606297082990016798"
    width="220"
    height="200"
  />
</a>

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://learning-study.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
