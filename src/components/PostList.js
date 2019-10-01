import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julia Alcantara',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Hearts&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=Light'
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Jane Doe',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=PastelBlue&eyeType=Default&eyebrowType=UpDown&mouthType=ScreamOpen&skinColor=Yellow'
        },
        date: '04 Jun 2019',
        content: 'Alguém participando da nova OmniStack?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Luiz Antônio',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=Black&clotheType=BlazerShirt&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Brown'
            },
            content: 'Sim, já estou acompanhando os vídeos! São excelentes!'
          },
          {
            id: 5,
            author: {
              name: 'Marcos Souza',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Sunglasses&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=PastelYellow&eyeType=Close&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Black'
            },
            content:
              'Estou adorando! A equipe está arrasando com os novos conteúdos!'
          }
        ]
      }
    ]
  };

  // Componente
  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
