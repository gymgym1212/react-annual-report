import React from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import './DomToImg.css'
function filter(node) {
    return (node.tagName !== 'i');
}
export function getSVG(node_id) {
    console.log(node_id)
    const node = document.getElementById(node_id)
    console.log(node)
        domtoimage.toSvg(node, { filter: filter,style:{
            
        }})
            .then((defaultUrl) => {
                const img = new Image();
                img.src = defaultUrl;
                img.classList.add('domImg');
                document.getElementById('export-img').appendChild(img);
                img.addEventListener('click', () => {
                    var link = document.createElement('a');
                    link.download = 'SVG';
                    link.href = defaultUrl;
                    link.click();
                })
            });
}
export function getJpegReady(node_id){
    const node = document.getElementById(node_id);
    console.log(node)
    domtoimage.toJpeg(node,{quality:1.0,scale:4, bgcolor:'#3b3b3b'}).then((defaultUrl) => {
        var img = new Image();
        img.src = defaultUrl;
        img.classList.add('domImg');
        img.addEventListener('click', () => {
            var link = document.createElement('a');
            link.download = 'AliOpenSourceReport.jpeg';
            link.href = defaultUrl;
            link.click();
        })
    }).catch((e) => {
        console.log("error",e)
    })
}
export function getJpeg(node_id){
    const node = document.getElementById(node_id);
    console.log(node)
    domtoimage.toJpeg(node,{quality:1.0,scale:3, bgcolor:'#3b3b3b'}).then((defaultUrl) => {
        var img = new Image();
        img.src = defaultUrl;
        img.classList.add('domImg');
        // // 将生成的png图片插入到页面
        var fa_node = document.getElementById('export-img')
        while(fa_node.firstChild!=null){
            fa_node.removeChild(fa_node.firstChild)
        }
        fa_node.appendChild(img);

        // 手动点击图片下载 自动下载调用saveAs(defaultUrl, '自动保存.png')
        img.addEventListener('click', () => {
            var link = document.createElement('a');
            link.download = 'AliOpenSourceReport.jpeg';
            link.href = defaultUrl;
            link.click();
        })
    }).catch((e) => {
        console.log("error",e)
    })
}
export function getPNG(node_id){
    const node = document.getElementById(node_id);
    domtoimage.toPng(node,{quality:1.0}).then((defaultUrl) => {
        const img = new Image();
        img.src = defaultUrl;
        img.setAttribute('className', 'pngImg');// 方便设置样式
        // // 将生成的png图片插入到当前页面
        document.getElementById('export-img').appendChild(img);
        // 手动点击图片下载 自动下载调用saveAs(defaultUrl, '自动保存.png')
        img.addEventListener('click', () => {
            var link = document.createElement('a');
            link.download = 'AliOpenSourceReport2.png';
            link.href = defaultUrl;
            link.click();
        })
        img.click()
    }).catch((e) => {
        console.log("error",e)
    })
}
