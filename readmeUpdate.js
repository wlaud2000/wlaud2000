import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi there 👋

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=wlaud2000)](https://github.com/anuraghazra/github-readme-stats)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=wlaud2000&layout=compact&hide=r,jupyter%20notebook,c%23&exclude_repo=roharui.github.io)](https://github.com/anuraghazra/github-readme-stats)

## 이런 환경에 익숙해요✍🏼

## Skills
<!-- https://github.com/Envoy-VC/awesome-badges -->
<p>
    <img alt="" src= "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/> 
    <img alt="" src= "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/> 
    <img alt="" src= "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"/>
</p>

## Contact me

<img alt="" src= "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
kimjim1234550@gmail.com

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
