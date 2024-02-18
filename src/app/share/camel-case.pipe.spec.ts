import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCasePipe();
    expect(pipe).toBeTruthy();
  });
  it('can change input text to camelcase',()=>{
    const pipe = new CamelCasePipe();
    expect(pipe.transform('unit one')).toBe('unitOne');
  })
});
