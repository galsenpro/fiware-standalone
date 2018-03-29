Introduction
------------

This operator allows you to use any [Orion Context Broker][orion] server as
source of data. This is accomplished by creating a subscription to obtain real
time notifications about changes on the entities of interest.

**NOTE:** This operator creates subscriptions using the *flat* option of the
WireCloud's NGSI API making impossible to use this operator with entities that
doesn't meet the following assumptions:

- given an entity id there is only one value for the entity's type parameter
- entities doesn't have attributes called id or type
- entities have only an attribute with a given name
- attribute types don't matter or are already known
- attribute metadata don't matter or is already known

Settings
--------

- **NGSI server URL:** URL of the Orion Context Broker to use for retrieving
  entity information.
- **NGSI proxy URL:** URL of the Orion Context Broker proxy to use for receiving
  notifications about changes.
- **Use the FIWARE credentials of the user:** Use the FIWARE credentials of the
  user logged into WireCloud. Take into account this option cannot be enabled if
  you want to use this widget in a public workspace as anonoymous users doesn't
  have a valid FIWARE auth token. As an alternative, you can make use of the
  "Use the FIWARE credentials of the workspace owner" preference.
- **Use the FIWARE credentials of the dashboard owner**: Use the FIWARE
  credentials of the owner of the workspace. This preference takes preference
  over "Use the FIWARE credentials of the user". This feature is available on
  WireCloud 0.7.0+ in a experimental basis, future versions of WireCloud can
  change the way to use it making this option not funcional and requiring you to
  upgrade this operator.
- **NGSI tenant/service**: Tenant/service to use when connecting to the context
  broker. Must be a string of alphanumeric characters (lowercase) and the `_`
  symbol. Maximum length is 50 characters. If empty, the default tenant will be
  used
- **NGSI scope**: Scope/path to use when connecting to the context broker. Must
  be a string of alphanumeric characters (lowercase) and the `_` symbol
  separated by `/` slashes. Maximum length is 50 characters. If empty, the
  default service path will be used: `/`
- **NGSI entity types:** A comma separated list of entity types to use for
  filtering entities from the Orion Context broker. This field cannot be empty.
- **Id pattern:** Id pattern for filtering entities. This preference can be
  empty, in that case, entities won't be filtered by id.
- **Monitored NGSI Attributes:** Attributes to monitor for updates. Currently,
  the Orion Context Broker requires a list of attributes to monitor for changes,
  so this field cannot be empty.

**NOTE** If you are using a custom instance of the Orion Context Broker, take
into account that by default Orion doesn't support sending notifications to
https endpoints. In those cases you can make use of a NGSI available through
http at (http://ngsiproxy.lab.fiware.org) instead of using the default one that
uses https (https://ngsiproxy.lab.fiware.org). Anyway, it is very recommended
to enable the https support (see this
[link](http://stackoverflow.com/questions/23338154/orion-context-broker-https-for-subscribers)
for more info about this matter).

Wiring
------

Input Endpoints:

* This widget has no input endpoint

Output Endpoints:

*   **Provide entity:** This operator sends an event thought this endpoint for
    each entity update retrieved from the context broker. In addition to this, this
    operator send an event for every entity available initially on the context
    broker.

    In any case, event data follows the format used by the NGSI API of WireCloud
    for returning. E.g.

        :::json
        {
            "id": "van4",
            "type": "Van",
            "current_position": "43.47173, -3.7967205"
        }


References
----------

* [Orion Context Broker][orion]

[orion]: http://catalogue.fiware.org/enablers/publishsubscribe-context-broker-orion-context-broker "Orion Context Broker info"
