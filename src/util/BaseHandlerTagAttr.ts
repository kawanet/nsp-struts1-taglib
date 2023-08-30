export interface BaseHandlerTagAttr {
    //  Navigation Management

    /**
     * Access key character.
     */
    accesskey: string;

    /**
     * Tab index value.
     */
    tabindex: string;

    //  Indexing ability for Iterate

    /**
     * Whether to created indexed names for fields
     *
     * @since Struts 1.1
     */
    indexed: string | boolean;

    //  Mouse Events

    /**
     * Mouse click event.
     */
    onclick: string;

    /**
     * Mouse double click event.
     */
    ondblclick: string;

    /**
     * Mouse over component event.
     */
    onmouseover: string;

    /**
     * Mouse exit component event.
     */
    onmouseout: string;

    /**
     * Mouse moved over component event.
     */
    onmousemove: string;

    /**
     * Mouse pressed on component event.
     */
    onmousedown: string;

    /**
     * Mouse released on component event.
     */
    onmouseup: string;

    //  Keyboard Events

    /**
     * Key down in component event.
     */
    onkeydown: string;

    /**
     * Key released in component event.
     */
    onkeyup: string;

    /**
     * Key down and up together in component event.
     */
    onkeypress: string;

    // Text Events

    /**
     * Text selected in component event.
     */
    onselect: string;

    /**
     * Content changed after component lost focus event.
     */
    onchange: string;

    // Focus Events and States

    /**
     * Component lost focus event.
     */
    onblur: string;

    /**
     * Component has received focus event.
     */
    onfocus: string;

    /**
     * Component is disabled.
     */
    disabled: string | boolean;

    /**
     * Component is readonly.
     */
    readonly: string | boolean;

    // CSS Style Support

    /**
     * Style attribute associated with component.
     */
    style: string;

    /**
     * Named Style class associated with component.
     */
    styleClass: string;

    /**
     * Identifier associated with component.
     */
    styleId: string;

    /**
     * The request attribute key for our error messages (if any).
     */
    errorKey: string;

    /**
     * Style attribute associated with component when errors exist.
     */
    errorStyle: string;

    /**
     * Named Style class associated with component when errors exist.
     */
    errorStyleClass: string;

    /**
     * Identifier associated with component when errors exist.
     */
    errorStyleId: string;

    // Other Common Attributes

    /**
     * The alternate text of this element.
     */
    alt: string;

    /**
     * The message resources key of the alternate text.
     */
    altKey: string;

    /**
     * The name of the message resources bundle for message lookups.
     */
    bundle: string;

    /**
     * The name of the session attribute key for our locale.
     */
    locale: string;

    /**
     * The advisory title of this element.
     */
    title: string;

    /**
     * The language code of this element.
     */
    lang: string;

    /**
     * The direction for weak/neutral text of this element.
     */
    dir: string;
}
