import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


import Divider from '@material-ui/core/Divider';

import CreateCard from './CreateCard';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);



// AppMain is メイン処理
export default function AppMain() {
  const classes = useStyles();

  interface Deck {
    id: number;
    name: string;
    ctgl: string;
    cost: string;
    ctglL2: string;
    cmt: string;
  };
  const datalists: Deck[] = [
    { id: 1, name: "神奈川県", ctgl: "生活基盤", cost: "1", ctglL2: "住む", cmt: "住処" },
    { id: 2, name: "三拍子", ctgl: "生活創造", cost: "1", ctglL2: "遊ぶ", cmt: "お笑い芸人" },
    { id: 4, name: "たこやきレインボー", ctgl: "生活創造", cost: "1", ctglL2: "遊ぶ", cmt: "お笑い芸人" },
    { id: 4, name: "わーすた", ctgl: "生活創造", cost: "1", ctglL2: "遊ぶ", cmt: "アイドル" },
    { id: 4, name: "ワールドトリガー", ctgl: "生活創造", cost: "1", ctglL2: "遊ぶ", cmt: "漫画" },
    { id: 4, name: "かぐや様は告られたい", ctgl: "生活創造", cost: "1", ctglL2: "遊ぶ", cmt: "漫画" },
    { id: 3, name: "磁石", ctgl: "生活創造", cost: "1", ctglL2: "遊ぶ", cmt: "お笑い芸人" }
  ];

  return (
    <div className={classes.root}>

      <Divider />
      <h1>人生をカード風に表現する</h1>
      <Divider />

      <List component="nav" aria-label="デッキ">

        {/* 配列の中身を展開する */}
        {datalists.map((item: Deck) => (

          <CreateCard
            name={item.name}
            ctgl={item.ctgl}
            cost={item.cost}
            ctglL2={item.ctglL2}
            comment={item.cmt}
            >
          </CreateCard>
        ))}

      </List>

    </div>
  );
}
