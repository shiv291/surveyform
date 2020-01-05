import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div class="container">
          <div class="col-md-2">
          </div>
          <div class="col-md-8">
            <div class="panel panel-default">
              <div class="panel-heading">Personal Info</div>
              <div class="panel-body">
                Gender:
                <br />
                <div class="btn-group" data-toggle="buttons">
                  <label class="btn btn-default">
                    <input type="radio" autocomplete="off" /> Male
                    </label>
                  <label class="btn btn-default">
                    <input type="radio" autocomplete="off" /> Female
                    </label>
                </div>
                <br />
                <br />

                Age Group:
                <br />
                <div class="btn-group" data-toggle="buttons">
                  <label class="btn btn-default">
                    <input type="radio" autocomplete="off" />Under 18
                    </label>
                  <label class="btn btn-default">
                    <input type="radio" autocomplete="off" />18-25
                    </label>
                  <label class="btn btn-default">
                    <input type="radio" autocomplete="off" />25-50
                    </label>
                  <label class="btn btn-default">
                    <input type="radio" autocomplete="off" />Over 50
                    </label>
                </div>
                <br />
                <br />
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">Experience Rating</div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-5">
                    <span style="font-size:22px;">Stay:</span>
                  </div>
                  <div class="col-md-10 col-sm-10 col-xs-7">
                    <div id="rate1" style="margin-top:6px;"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-5">
                    <span style="font-size:22px;">Food:</span>
                  </div>
                  <div class="col-md-10 col-sm-10 col-xs-7">
                    <div id="rate2" style="margin-top:6px;"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-5">
                    <span style="font-size:22px;">Service:</span>
                  </div>
                  <div class="col-md-10 col-sm-10 col-xs-7">
                    <div id="rate3" style="margin-top:6px;"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">Travel Satisfaction</div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-12">
                    <span style="font-size:22px;">Travel:</span>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-2 text-center">
                    <button id="decrease1" style="width:100%; max-width:35px;">-</button>
                  </div>
                  <div class="col-md-8 col-sm-8 col-xs-8">
                    <div style="width:100%;" id="progress1"></div>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-2 text-center">
                    <button id="increase1" style="width:100%; max-width:35px;">+</button>
                  </div>
                </div>
                <div class="clearfix"><br /></div>
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-12">
                    <span style="font-size:22px;">Transfer:</span>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-2 text-center">
                    <button id="decrease2" style="width:100%; max-width:35px;">-</button>
                  </div>
                  <div class="col-md-8 col-sm-8 col-xs-8">
                    <div style="width:100%;" id="progress2"></div>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-2 text-center">
                    <button id="increase2" style="width:100%; max-width:35px;">+</button>
                  </div>
                </div>
                <div class="clearfix"><br /></div>
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-xs-12">
                    <span style="font-size:22px;">Checkin:</span>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-2 text-center">
                    <button id="decrease3" style="width:100%; max-width:35px;">-</button>
                  </div>
                  <div class="col-md-8 col-sm-8 col-xs-8">
                    <div style="width:100%;" id="progress3"></div>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-2 text-center">
                    <button id="increase3" style="width:100%; max-width:35px;">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
