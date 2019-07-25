
//../pages/admin/index
import { created_all } from '../pages/admin/index';
describe('posts/all', () => {
  it('axios return mock value', async () => {
    const res = await created_all;
    expect(res).toBe(res);
  });
});

//../pages/admin/edit/_id
import { created_id } from '../pages/admin/edit/_id';
describe('posts/posts/params', () => {
  it('axios return mock value', async () => {
    const res = await created_id;
    expect(res).toBe(res);
  });
});


import { uploud_id } from '../pages/admin/edit/_id';
describe('uploud image', () => {
  it('axios return mock value', async () => {
    const res = await uploud_id;
    expect(res).toBe(res);
  });
});

import { featuredImage_id } from '../pages/admin/edit/_id';
describe('featuredImage image', () => {
  it('axios return mock value', async () => {
    const res = await featuredImage_id;
    expect(res).toBe(res);
  });
});


import { Articlepost_id } from '../pages/admin/edit/_id';
describe('Articlepost', () => {
  it('axios return mock value', async () => {
    const res = await Articlepost_id;
    expect(res).toBe(res);
  });
});


import { Articledelete_id } from '../pages/admin/edit/_id';
describe('Articlepost', () => {
  it('axios return mock value', async () => {
    const res = await Articledelete_id;
    expect(res).toBe(res);
  });
});

//../pages/admin/post
import { uploud_post } from '../pages/admin/post/index';
describe('uploud image', () => {
  it('axios return mock value', async () => {
    const res = await uploud_post;
    expect(res).toBe(res);
  });
});

import { featuredImage_post } from '../pages/admin/post/index';
describe('uploud image', () => {
  it('axios return mock value', async () => {
    const res = await featuredImage_post;
    expect(res).toBe(res);
  });
});



//../pages/admin/post
import { Articlepost_post } from '../pages/admin/post/index';
describe('Articlepost image', () => {
  it('axios return mock value', async () => {
    const res = await Articlepost_post;
    expect(res).toBe(res);
  });
});
