import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='container-fluid'>
      <div className='header'>
        <div className='logo'>
          <i className='fas fa-bolt'></i>
          <a href='https://ressum-portfolio.herokuapp.com/'>DLCC</a>
        </div>

        <div className='mobileHidden'>
          <Anchor targetOffset='65'>
            <Link href='#hero' title='Home' />
            <Link href='#about' title='About' />
            <Link href='#feature' title='Feature' />
            <Link href='#works' title='How it Works' />
            <Link href='#faq' title='Faq' />
            <Link href='#pricing' title='pricing' />
            <Link href='#contact' title='contact' />
          </Anchor>
        </div>
        <div className='mobileVisible'>
          <Button type='primary' onClick={showDrawer}>
            <i className='fas fa-bars'></i>
          </Button>
          <Drawer
            placement='right'
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset='65'>
              <Link href='#hero' title='Home' />
              <Link href='#about' title='About' />
              <Link href='#feature' title='Feature' />
              <Link href='#works' title='How it Works' />
              <Link href='#faq' title='Faq' />
              <Link href='#pricing' title='pricing' />
              <Link href='#contact' title='contact' />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
