SUBSCRIPTION {
    requestRef: '626517472',
    result: [
      {
        code: 'XCIS-00',
        message: 'Subscription callback response',
        contentData: [Object]
      }
    ],
    errors: []
  }
  SUBSCRIPTION==> {
    status: 'GRACE',
    name: 'bnrev-panzcon',
    operatorName: 'mtn-za',
    country: 'ZA',
    serviceId: 'M7KSpPKjwr2oFvzRiFLSMry4',
    contentName: 'bnrev-panzcon-gameofyy',
    msisdn: '27633921782',
    subscriptionId: '448860078',
    operatorTimestamp: '2022-05-10T16:21:19+02:00'
  }
  SUBSCRIPTION {
    requestRef: '626517472',
    result: [
      {
        code: 'XCIS-00',
        message: 'Subscription callback response',
        contentData: [Object]
      }
    ],
    errors: []
  }
  SUBSCRIPTION==> {
    status: 'ACTIVE',
    name: 'bnrev-panzcon',
    operatorName: 'mtn-za',
    country: 'ZA',
    serviceId: 'M7KSpPKjwr2oFvzRiFLSMry4',
    contentName: 'bnrev-panzcon-gameofyy',
    msisdn: '27633921782',
    subscriptionId: '448860078',
    operatorTimestamp: '2022-05-10T16:21:19+02:00'
  }
  REQ BILLING  {
    requestRef: '626517472',
    result: [
      {
        code: 'XCIS-00',
        message: 'Payment callback response',
        contentData: [Object]
      }
    ],
    errors: []
  }
  BILLING REQ  {
    status: 'SUCCESS',
    name: 'bnrev-panzcon',
    operatorName: 'mtn-za',
    country: 'ZA',
    serviceId: 'M7KSpPKjwr2oFvzRiFLSMry4',
    contentName: 'bnrev-panzcon-gameofyy',
    msisdn: '27633921782',
    subscriptionId: '448860078',
    billedAmount: '500',
    billingRate: '500',
    operatorTimestamp: '2022-05-10T16:21:20+02:00'
  }
  REQ QYERYYY {
    'request-ref': '626517472',
    status: 'ACTIVE',
    msisdn: 'Mjc2MzM5MjE3ODI=',
    subscription_id: '448860078',
    operator_name: 'mtn-za',
    country: 'ZA',
    service_id: 'M7KSpPKjwr2oFvzRiFLSMry4'
  }
  GET /DOIRedirect?request-ref=626517472&status=ACTIVE&msisdn=Mjc2MzM5MjE3ODI=&subscription_id=448860078&operator_name=mtn-za&country=ZA&service_id=M7KSpPKjwr2oFvzRiFLSMry4 302 7.243 ms - 62
  GET /redirect 200 2.124 ms - 644
  REQ QYERYYY {
    'request-ref': '626517472',
    status: 'ACTIVE',
    msisdn: 'Mjc2MzM5MjE3ODI=',
    subscription_id: '448860078',
    operator_name: 'mtn-za',
    country: 'ZA',
    service_id: 'M7KSpPKjwr2oFvzRiFLSMry4'
  }
  GET /DOIRedirect?request-ref=626517472&status=ACTIVE&msisdn=Mjc2MzM5MjE3ODI=&subscription_id=448860078&operator_name=mtn-za&country=ZA&service_id=M7KSpPKjwr2oFvzRiFLSMry4 302 1.542 ms - 62
  GET /redirect 200 3.706 ms - 644
  GET /static/js/main.16bde53a.js 304 2.385 ms - -
  GET /static/css/main.8fad200b.css 304 0.667 ms - -
  POST /subscription - - ms - -
  POST /subscription - - ms - -
  POST /billing - - ms - -
  


  cancelled

  SUBSCRIPTION==> {
    status: 'CANCELLED',
    name: 'bnrev-panzcon',
    operatorName: 'mtn-za',
    country: 'ZA',
    serviceId: 'M7KSpPKjwr2oFvzRiFLSMry4',
    contentName: 'bnrev-panzcon-gameofyy',
    msisdn: '27633921782',
    subscriptionId: '448860078',
    operatorTimestamp: '2022-05-10T16:34:14+02:00'
  }
  POST /subscription - - ms - -
  
  