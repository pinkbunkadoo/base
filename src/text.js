import Fragment from './fragment';

class Text extends Fragment {
  constructor(params={}) {
    super(params);
    this.text = params.text;
  }
}

export default Text;
