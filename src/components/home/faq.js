import React from 'react';
import { Collapse } from 'antd';
import { Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div className='block faqBlock'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>Frequently Asked Question</h2>
          <p>
            Voluptatibus velit repellat non minima?magni autem Lorem ipsum dolor
            sit,
          </p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='How I manage multiple task?' key='1'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              magni autem enim magnam deleniti quod? Voluptatibus velit repellat
              non minima?magni autem enim magnam deleniti quod? Voluptatibus
              velit repellat non minima?
            </p>
          </Panel>
          <Panel header='How to setup the theme?' key='2'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              quaerat inventore laborum ipsa voluptatem magni esse quis mollitia
              eligendi nisi! magni autem enim magnam deleniti quod? Voluptatibus
              velit repellat non minima?
            </p>
          </Panel>
          <Panel header='Can I change plan or cancel at my time?' key='3'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              ipsam ratione, maxime illo odit explicabo voluptatem suscipit enim
              harum ex. magni autem enim magnam deleniti quod? Voluptatibus
              velit repellat non minima?
            </p>
          </Panel>
          <Panel header='Can I manage through cloud?' key='4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              ipsam ratione, maxime illo odit explicabo voluptatem suscipit enim
              harum ex. magni autem enim magnam deleniti quod? Voluptatibus
              velit repellat non minima?
            </p>
          </Panel>
          <Panel header='How to change my password?' key='5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              ipsam ratione, maxime illo odit explicabo voluptatem suscipit enim
              harum ex. magni autem enim magnam deleniti quod? Voluptatibus
              velit repellat non minima?
            </p>
          </Panel>
          <Panel header='How to manage my account?' key='6'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              ipsam ratione, maxime illo odit explicabo voluptatem suscipit enim
              harum ex. magni autem enim magnam deleniti quod? Voluptatibus
              velit repellat non minima?
            </p>
          </Panel>
        </Collapse>
        <div className='quickSupport'>
          <h2>Want quick support?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button type='primary' size='large'>
            <i className='fas fa-envelope'></i> Email your qustion
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
