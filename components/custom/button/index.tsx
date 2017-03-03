import Button from '../../button/button';
import ButtonGroup from '../../button/button-group';
import SubmitGroup from './submit-group';

import enhance from './Enhance';

const CButton = enhance(Button);

CButton.Group = ButtonGroup;
CButton.SubmitGroup = SubmitGroup;

export default CButton;
