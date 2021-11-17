/**
 * Documentation from https://developer.mozilla.org/docs/Web/HTTP/Status.
 */
export enum HttpStatus {

  /**
   * The request has succeeded. The meaning of a success varies depending on the HTTP method:
   * GET: The resource has been fetched and is transmitted in the message body.
   * HEAD: The entity headers are in the message body.
   * POST: The resource describing the result of the action is transmitted in the message body.
   * TRACE: The message body contains the request message as received by the server
   */
  Ok = 200,

  /**
   * The request has succeeded and a new resource has been created as a result of it.
   * This is typically the response sent after a POST request, or after some PUT requests.
   */
  Created = 201,

  /**
   * There is no content to send for this request, but the headers may be useful.
   * The user-agent may update its cached headers for this resource with the new ones.
   */
  NoContent = 204,

  /**
   * This response code means that the URI of the requested resource has been changed.
   * Probably, the new URI would be given in the response.
   */
  MovedPermantently = 301,

  /**
   * This response code means that the URI of requested resource has been changed temporarily.
   * New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future
   * requests.
   */
  Found = 302,

  /**
   * This is used for caching purposes. It tells the client that the response has not been modified, so the client can
   * continue to use the same cached version of the response.
   */
  NotModified = 304,

  /**
   * The server sends this response to direct the client to get the requested resource at another URI with same method
   * that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the
   * exception that the user agent must not change the HTTP method used:
   * If a POST was used in the first request, a POST must be used in the second request.
   */
  TemporaryRedirect = 307,

  /**
   * This means that the resource is now permanently located at another URI, specified by the
   * Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with
   * the exception that the user agent must not change the HTTP method used: If a POST was used in the first request,
   * a POST must be used in the second request.
   */
  PermanentRedirect = 308,

  /** This response means that server could not understand the request due to invalid syntax. */
  BadRequest = 400,

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   * That is, the client must authenticate itself to get the requested response.
   */
  Unauthorized = 401,

  /** The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give
   * proper response. Unlike 401, the client's identity is known to the server.
   */
  Forbidden = 403,

  /**
   * The server can not find requested resource. In the browser, this means the URL is not recognized.
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
   * Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client.
   */
  NotFound = 404,

  /**
   * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid
   * DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this
   * error code.
   */
  MethodNotAllowed = 405,

  /**
   * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any
   * content following the criteria given by the user agent.
   */
  NotAcceptable = 406,

  /** This is similar to 401 but authentication is needed to be done by a proxy. */
  ProxyAuthenticationRequired = 407,

  /** This response is sent when a request conflicts with the current state of the server. */
  Conflict = 409,

  /**
   * This response would be sent when the requested content has been permanently deleted from server,
   * with no forwarding address. Clients are expected to remove their caches and links to the resource.
   * The HTTP specification intends this status code to be used for "limited-time, promotional services".
   * APIs should not feel compelled to indicate resources that have been deleted with this status code.
   */
  Gone = 410,

  /**
   * One or more conditions given in the request header fields evaluated to false when tested on the server.
   */
  PreconditionFailed = 412,

  /**
   * Request entity is larger than limits defined by server;
   * the server might close the connection or return an Retry-After header field.
   */
  PayloadTooLarge = 413,

  /**
   * The URI requested by the client is longer than the server is willing to interpret.
   * Wiki: Die URL der Anfrage war zu lang. Ursache ist oft eine Endlosschleife aus Redirects.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  URITooLong = 414,

  /** The media format of the requested data is not supported by the server, so the server is rejecting the request. */
  UnsupportedMediaType = 415,

  /**
   * Der angeforderte Teil einer Ressource war ungültig oder steht auf dem Server nicht zur Verfügung.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  RangeNotSatisfiable = 416,

  /**
   * Verwendet im Zusammenhang mit einem „Expect“-Header-Feld. Das im „Expect“-Header-Feld geforderte Verhalten des
   * Servers kann nicht erfüllt werden.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  ExpectationFailed = 417,

  /** The request was well-formed but was unable to be followed due to semantic errors. */
  UnprocessableEntity = 422,

  /**
   * Die angeforderte Ressource ist zur Zeit gesperrt.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  Locked = 423,

  /**
   *
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  PreconditionRequired = 428,

  /** The user has sent too many requests in a given amount of time ("rate limiting"). */
  TooManyRequests = 429,

  /**
   * Für die Anfrage waren nicht alle Vorbedingungen erfüllt.
   * Dieser Statuscode soll Probleme durch Race Conditions verhindern, indem eine Manipulation oder Löschen nur erfolgt,
   * wenn der Client dies auf Basis einer aktuellen Ressource anfordert
   * (Beispielsweise durch Mitliefern eines aktuellen ETag-Header).
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  RequestHeaderFieldsTooLarge = 431,

  /** The server has encountered a situation it doesn't know how to handle. */
  InternalServerError = 500,

  /**
   * The request method is not supported by the server and cannot be handled.
   * The only methods that servers are required to support (and therefore that must not return this code) are
   * GET and HEAD.
   */
  NotImplemented = 501,

  /**
   * This error response means that the server, while working as a gateway to get a response needed to handle the
   * request, got an invalid response.
   */
  BadGateway = 502,

  /**
   * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is
   * overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.
   * This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible,
   * contain the estimated time before the recovery of the service. The webmaster must also take care about the
   * caching-related headers that are sent along with this response, as these temporary condition responses should
   * usually not be cached.
   */
  ServiceUnavailable = 503,

  /**
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  GatewayTimeout = 504,

  /**
   * Die Anfrage konnte nicht bearbeitet werden, weil der Speicherplatz des Servers dazu derzeit nicht mehr ausreicht.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  InsufficientStorage = 507,
  /** Die Operation wurde nicht ausgeführt, weil die Ausführung in eine Endlosschleife gelaufen wäre.
   * Definiert in der Binding-Erweiterung für WebDAV gemäß RFC 5842, weil durch Bindings zyklische Pfade zu
   * WebDAV-Ressourcen entstehen können.
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  LoopDetected = 508,
  /** Die Anfrage wurde verworfen, weil sonst die verfügbare Bandbreite überschritten würde
   * (inoffizielle Erweiterung einiger Server).
   * Eingeführt für talo-konformes logging, das ein Mapping der Http-Codes vorsieht.
   */
  BandwidthLimitExceeded = 509,

}
