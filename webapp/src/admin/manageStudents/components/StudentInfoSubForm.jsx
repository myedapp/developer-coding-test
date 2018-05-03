import React from 'react';

import {
  renderStaticTextRows,
  renderStaticText,
} from '../../../common/components/form/reduxFormComponents';


const APP_BACKGROUND_COLOR = '#F6F6F6';

class StudentInfoSubForm extends React.Component {
  render() {
    console.warn('info sub: props = ', this.props);
    const { data } = this.props;

    return (
      <div>

        <div>
          {
            data.quest_paths.map((d, i) => (
              <div className="row">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {renderStaticText({ label: 'Quest Path No.', input: { value: i }, style: { fontSize: 16 } })}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                    {renderStaticTextRows({ label: 'Quest id', value: d.quest.id })}
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                    {renderStaticTextRows({ label: 'Quest name', value: d.quest.name })}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {renderStaticTextRows({ label: 'Mark value', value: d.mark.mark })}
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {renderStaticTextRows({ label: 'Mark completion', value: d.mark.completion, fix: '%' })}
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {renderStaticTextRows({ label: 'Mark submitted', value: d.mark.submitted, isBool: true })}
                  </div>
                </div>
              </div>
            ))
          }
        </div>


      </div>
    );
  }
}

export default StudentInfoSubForm;
