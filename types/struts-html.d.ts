import type {NSP} from "nsp-server-pages";

/**
 * html
 * uri: http://struts.apache.org/tags-html
 *
 * <p>
 * This taglib contains tags used to create struts
 * input forms, as well as other tags generally useful
 * in the creation of HTML-based user interfaces.
 * </p>
 * <p>Many of the tags in this tag library will throw a
 * <code>JspException</code> at runtime when they are utilized incorrectly
 * (such as when you specify an invalid combination of tag attributes).  JSP
 * allows you to declare an "error page" in the <code><%@ page %></code>
 * directive.  If you wish to process the actual exception that caused the
 * problem, it is passed to the error page as a request attribute under key
 * <code>org.apache.struts.action.EXCEPTION</code>.</p>
 */
declare namespace Struts1Html {
    type htmlTags = {
        base: NSP.TagFn<BaseTagAttr>;
        button: NSP.TagFn<ButtonTagAttr>;
        cancel: NSP.TagFn<CancelTagAttr>;
        checkbox: NSP.TagFn<CheckboxTagAttr>;
        errors: NSP.TagFn<ErrorsTagAttr>;
        file: NSP.TagFn<FileTagAttr>;
        form: NSP.TagFn<FormTagAttr>;
        frame: NSP.TagFn<FrameTagAttr>;
        hidden: NSP.TagFn<HiddenTagAttr>;
        html: NSP.TagFn<HtmlTagAttr>;
        image: NSP.TagFn<ImageTagAttr>;
        img: NSP.TagFn<ImgTagAttr>;
        javascript: NSP.TagFn<JavascriptValidatorTagAttr>;
        label: NSP.TagFn<LabelTagAttr>;
        link: NSP.TagFn<LinkTagAttr>;
        param: NSP.TagFn<ParamTagAttr>;
        messages: NSP.TagFn<MessagesTagAttr>;
        multibox: NSP.TagFn<MultiboxTagAttr>;
        option: NSP.TagFn<OptionTagAttr>;
        options: NSP.TagFn<OptionsTagAttr>;
        optionsCollection: NSP.TagFn<OptionsCollectionTagAttr>;
        password: NSP.TagFn<PasswordTagAttr>;
        radio: NSP.TagFn<RadioTagAttr>;
        reset: NSP.TagFn<ResetTagAttr>;
        rewrite: NSP.TagFn<RewriteTagAttr>;
        select: NSP.TagFn<SelectTagAttr>;
        submit: NSP.TagFn<SubmitTagAttr>;
        text: NSP.TagFn<TextTagAttr>;
        textarea: NSP.TagFn<TextareaTagAttr>;
        xhtml: NSP.TagFn<XhtmlTagAttr>;
    };

    /**
     * <html:base>
     * org.apache.struts.taglib.html.BaseTag
     *
     * @description
     * <p><strong>Render an HTML <code><base></code> Element</strong></p>
     * <p>Renders an HTML <code><base></code> element with an
     * <code>href</code> attribute pointing to the absolute location of
     * the enclosing JSP page.  This tag is valid only when nested inside
     * an HTML <code><head></code> element.</p>
     * <p>This tag is useful because it allows you to use relative URL
     * references in the page that are calculated based on the URL of the
     * page itself, rather than the URL to which the most recent submit
     * took place (which is where the browser would normally resolve
     * relative references against).</p>
     */
    interface BaseTagAttr {
        /**
         * <p>The window target for this base reference.</p>
         */
        target?: string;

        /**
         * <p>The server name to use instead of request.getServerName().</p>
         */
        server?: string;

        /**
         * <p>The reference from which the base uri will created.  Possible values are:
         * </p>
         * <ul>
         * <li><code>page</code> - The base uri will be the jsp page location. (default)</li>
         * <li><code>site</code> - The base uri will be the application context path.</li>
         * </ul>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3</dd></dl>
         */
        ref?: string;

    }

    /**
     * <html:button>
     * org.apache.struts.taglib.html.ButtonTag
     *
     * @description
     * <p><strong>Render A Button Input Field</strong></p>
     * <p>
     * Renders an HTML <input> element of type
     * <code>button</code>, populated from the specified value or the
     * content of this tag body. This tag is only valid when nested
     * inside a form tag body.
     * </p>
     * <p>
     * If a graphical button is needed (a button with an image), then the
     * <code><html:image></code> tag is more appropriate.
     * </p>
     */
    interface ButtonTagAttr {
        /**
         * <p>The keyboard character used to move focus immediately to this
         * element.</p>
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * <p>The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * <p>Set to <code>true</code> if this input field should be
         * disabled.</p>
         */
        disabled?: string;

        /**
         * <p>Valid only inside of <code>logic:iterate</code> tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "propertyName[34]". Number in brackets will be generated for
         * every iteration and taken from ancestor logic:iterate tag.</p>
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value of the label to be placed on this button. This value will
         * also be submitted as the value of the specified request parameter.
         * [Body of this tag (if any), or "Click"]
         */
        value?: string;

    }

    /**
     * <html:cancel>
     * org.apache.struts.taglib.html.CancelTag
     *
     * @description
     * <p><strong>
     * Render a Cancel Button
     * </strong></p>
     * <p>
     * Renders an HTML <input> element of type submit. This tag is only
     * valid when nested inside a form tag body. Pressing of this submit
     * button causes the action servlet to bypass calling the associated
     * form bean validate() method. The action is called normally.
     * </p>
     */
    interface CancelTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         * <strong>WARNING</strong> - If you set this attribute to a
         * value other than the default, this will <em>NOT</em> be
         * recognized as the cancel key by the Struts controller servlet
         * or the <code>Action.isCancelled()</code> method.  You will
         * need to do your own cancel detection.
         */
        property?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value of the label to be placed on this button. This value will
         * also be submitted as the value of the specified request parameter.
         * [Body of this tag (if any), or "Cancel"]
         */
        value?: string;

    }

    /**
     * <html:checkbox>
     * org.apache.struts.taglib.html.CheckboxTag
     *
     * @description
     * <p><strong>
     * Render A Checkbox Input Field
     * </strong></p>
     * <p>Renders an HTML <input> element of type
     * <code>checkbox</code>, populated from the specified
     * value or the specified property of the bean associated
     * with our current form. This tag is only valid when
     * nested inside a form tag body.</p>
     * <p><strong>NOTE</strong>:  The underlying property value
     * associated with this field should be of type <code>boolean</code>,
     * and any <code>value</code> you specify should correspond to one
     * of the Strings that indicate a true value ("true", "yes", or
     * "on").  If you wish to utilize a set of related String values,
     * consider using the <code>multibox</code> tag.</p>
     * <p><strong>WARNING</strong>:  In order to correctly
     * recognize unchecked checkboxes, the
     * <code>ActionForm</code> bean associated with this form
     * must include a statement setting the corresponding
     * boolean property to <code>false</code> in the
     * <code>reset()</code> method.</p>
     */
    interface CheckboxTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of <code>logic:iterate</code> tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The attribute name of the bean whose properties are consulted when
         * rendering the current value of this input field. If not specified,
         * the bean associated with the form tag we are nested within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * The value to be transmitted if this checkbox is
         * checked when the form is submitted.  If not specified,
         * the value "on" will be returned.
         */
        value?: string;

    }

    /**
     * <html:errors>
     * org.apache.struts.taglib.html.ErrorsTag
     *
     * @description
     * <p><strong>
     * Conditionally display a set of accumulated error messages.
     * </strong></p>
     * <p>Displays a set of error messages prepared by a business
     * logic component and stored as an <code>ActionMessages</code>
     * object, an <code>ActionErrors</code>
     * object, a String, or a String array in any scope.  If
     * such a bean is not found, nothing will be rendered.</p>
     * <p>In order to use this tag successfully, you must have
     * defined an application scope <code>MessageResources</code>
     * bean under the default attribute name, with optional
     * definitions of message keys specified in the following
     * attributes:</p>
     * <ul>
     * <li><strong>header</strong> - Text that will be rendered
     * before the error messages list.  Typically, this message text
     * will end with <code><ul></code> to start the
     * error messages list (default "errors.header").</li>
     * <li><strong>footer</strong> - Text that will be rendered
     * after the error messages list.  Typically, this message text
     * will begin with <code></ul></code> to end the error
     * messages list (default "errors.footer").</li>
     * <li><strong>prefix</strong> - Text that will be rendered
     * before each individual error in the list (default "errors.prefix").</li>
     * <li><strong>suffix</strong> - Text that will be rendered
     * after each individual error in the list (default "errors.suffix").</li>
     * </ul>
     * <p>See the <code>messages</code> tag for an alternative to this tag that
     * does not rely on HTML in your <code>MessageResources</code>.</p>
     */
    interface ErrorsTagAttr {
        /**
         * The servlet context attribute key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         */
        bundle?: string;

        /**
         * This value is an optional message resource key that will
         * be printed after the iteration of error messages has finished.
         * Defaults to "errors.footer" if not specified.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        footer?: string;

        /**
         * This value is an optional message resource key that will
         * be printed before the iteration of error messages begins.
         * Defaults to "errors.header" if not specified.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        header?: string;

        /**
         * The session attribute key for the Locale used to select
         * messages to be displayed.  If not specified, defaults to
         * the Struts standard value.
         */
        locale?: string;

        /**
         * Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.
         */
        name?: string;

        /**
         * This value is an optional message resource key that will
         * be printed before an error message.
         * Defaults to "errors.prefix" if not specified.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        prefix?: string;

        /**
         * Name of the property for which error messages should be
         * displayed.  If not specified, all error messages (regardless
         * of property) are displayed.
         */
        property?: string;

        /**
         * This value is an optional message resource key that will
         * be printed after an error message.
         * Defaults to "errors.suffix" if not specified.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        suffix?: string;

    }

    /**
     * <html:file>
     * org.apache.struts.taglib.html.FileTag
     *
     * @description
     * <p><strong>
     * Render A File Select Input Field
     * </strong></p>
     * <p>
     * Renders an HTML <input> element of type file, defaulting to
     * the specified value or the specified property of the bean
     * associated with our current form. This tag is only valid when
     * nested inside a form tag body.
     * </p>
     * <p>
     * As with the corresponding HTML <input> element, the
     * enclosing form element must specify "POST" for the <code>method</code>
     * attribute, and "multipart/form-data" for the <code>enctype</code>
     * attribute. For example:
     * </p>
     * <pre>
     * <html:form method="POST" enctype="multipart/form-data">
     * <html:file property="theFile" />
     * </html:form></pre>
     * <p>
     * WARNING: In order to correctly recognize uploaded files, the ActionForm bean
     * associated with this form must include a statement setting the corresponding
     * org.apache.struts.upload.FormFile property to null in the reset() method.
     * </p>
     */
    interface FileTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * Comma-delimited set of content types that the server you submit to
         * knows how to process. This list can be used by the client browser
         * to limit the set of file options that is made available for selection.
         * If not specified, no content type list will be sent.
         */
        accept?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of <code>logic:iterate</code> tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * Maximum number of input characters to accept.  This is ignored
         * by most browsers. [No limit]
         */
        maxlength?: string;

        /**
         * The attribute name of the bean whose properties are consulted when
         * rendering the current value of this input field. If not specified,
         * the bean associated with the form tag we are nested within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property: string;

        /**
         * Size of the file selection box to be displayed.
         */
        size?: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * <p>
         * <strong>NOTE</strong>: When setting this to some value, whether
         * intentional or as the result (for example) of validation errors
         * forcing the user back to the original jsp, this value is ignored
         * by most browsers (for security reasons).
         * This means that your users will have to re-select any previously
         * selected files when submitting the form.  Opera web browser will
         * prompt the user so they have a chance to abort the submit.
         * </p>
         * Value to which this field should be initialized. [Use the
         * corresponding bean property value or body content (if any) if
         * property is not specified]
         */
        value?: string;

    }

    /**
     * <html:form>
     * org.apache.struts.taglib.html.FormTag
     *
     * @description
     * <p><strong>
     * Define An Input Form
     * </strong></p>
     * <p>
     * Renders an HTML <form> element whose contents are described
     * by the body content of this tag. The form implicitly interacts
     * with the specified request scope or session scope bean to populate
     * the input fields with the current property values from the bean.
     * </p>
     * <p>
     * The form bean is located, and created if necessary, based on the
     * form bean specification for the associated <code>ActionMapping</code>.
     * </p>
     */
    interface FormTagAttr {
        /**
         * <p>The URL to which this form will be submitted.  This
         * value is also used to select the ActionMapping we are
         * assumed to be processing, from which we can identify
         * the appropriate form bean and scope.  If a value is not
         * provided, the original URI (servletPath) for the request is
         * used. </p>
         * <p>If you are using extension mapping for selecting the
         * controller servlet, this value should be equal to the
         * <code>path</code> attribute of the corresponding
         * <code><action></code> element, optionally
         * followed by the correct extension suffix.</p>
         * <p>If you are using path mapping to select the
         * controller servlet, this value should be exactly equal
         * to the <code>path</code> attribute of the corresponding
         * <code><action></code> element.</p>
         */
        action?: string;

        /**
         * The list of character encodings for input data that the server should
         * accept.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.2</dd></dl>
         */
        acceptCharset?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if the Form's input fields should be
         * disabled.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.7</dd></dl>
         */
        disabled?: string;

        /**
         * The content encoding to be used to submit this form, if the method
         * is POST. This must be set to "multipart/form-data" if you are using
         * the file tag to enable file upload. If not specified, the browser
         * default (normally "application/x-www-form-urlencoded") is used.
         */
        enctype?: string;

        /**
         * The field name (among the fields on this form) to which initial
         * focus will be assigned with a JavaScript function. If not specified,
         * no special JavaScript for this purpose will be rendered.
         */
        focus?: string;

        /**
         * If the focus field is a field array, such as a radio button group, you can
         * specify the index in the array to receive focus.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.1</dd></dl>
         */
        focusIndex?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The HTTP method that will be used to submit this request
         * (GET, POST). [POST]
         */
        method?: string;

        /**
         * JavaScript event handler executed if the form is reset.
         */
        onreset?: string;

        /**
         * JavaScript event handler executed if the form is submitted.
         */
        onsubmit?: string;

        /**
         * Set to <code>true</code> if the Form's input fields should be
         * read only.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.7</dd></dl>
         */
        readonly?: string;

        /**
         * The form's focus <script> element will not contain a language attribute
         * when this is set to false.  The default is true but this property is ignored
         * in XHMTL mode.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2</dd></dl>
         */
        scriptLanguage?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * Window target to which this form is submitted, such as
         * for use in framed presentations.
         */
        target?: string;

    }

    /**
     * <html:frame>
     * org.apache.struts.taglib.html.FrameTag
     *
     * @description
     * <p><strong>Render an HTML frame element</strong></p>
     * <p>Renders an HTML <code><frame></code> element
     * with processing for the <code>src</code> attribute that is
     * identical to that performed by the <code><html:link></code>
     * tag for the <code>href</code> attribute.  URL rewriting will be
     * applied automatically, to maintain session state in the
     * absence of cookies.</p>
     * <p>The base URL for this frame is calculated based on
     * which of the following attributes you specify (you must
     * specify exactly one of them):</p>
     * <ul>
     * <li><em>forward</em> - Use the value of this attribute as the
     * name of a global <code>ActionForward</code> to be looked
     * up, and use the module-relative or context-relative
     * URI found there.</li>
     * <li><em>href</em> - Use the value of this attribute unchanged.
     * </li>
     * <li><em>page</em> - Use the value of this attribute as a
     * module-relative URI, and generate a server-relative
     * URI by including the context path and application
     * prefix.</li>
     * <li><em>action</em> - Use the value of this attribute as the
     * logical name of a global Action that contains the actual
     * content-relative URI of the destination of this transfer.</li>
     * </ul>
     * <p>Normally, the hyperlink you specify with one of the
     * attributes described in the previous paragraph will be left
     * unchanged (other than URL rewriting if necessary).  However,
     * there are two ways you can append one or more dynamically
     * defined query parameters to the hyperlink -- specify a single
     * parameter with the <code>paramId</code> attribute (and its
     * associated attributes to select the value), or specify the
     * <code>name</code> (and optional <code>property</code>)
     * attributes to select a <code>java.util.Map</code> bean that
     * contains one or more parameter ids and corresponding values.
     * </p>
     * <p>To specify a single parameter, use the <code>paramId</code>
     * attribute to define the name of the request parameter to be
     * submitted.  To specify the corresponding value, use one of the
     * following approaches:</p>
     * <ul>
     * <li><em>Specify only the <code>paramName</code> attribute</em>
     * - The named JSP bean (optionally scoped by the value of the
     * <code>paramScope</code> attribute) must identify a value
     * that can be converted to a String.</li>
     * <li><em>Specify both the <code>paramName</code> and
     * <code>paramProperty</code> attributes</em> - The specified
     * property getter method will be called on the JSP bean
     * identified by the <code>paramName</code> (and optional
     * <code>paramScope</code>) attributes, in order to select
     * a value that can be converted to a String.</li>
     * </ul>
     * <p>If you prefer to specify a <code>java.util.Map</code> that
     * contains all of the request parameters to be added to the
     * hyperlink, use one of the following techniques:</p>
     * <ul>
     * <li><em>Specify only the <code>name</code> attribute</em> -
     * The named JSP bean (optionally scoped by the value of
     * the <code>scope</code> attribute) must identify a
     * <code>java.util.Map</code> containing the parameters.</li>
     * <li><em>Specify both <code>name</code> and
     * <code>property</code> attributes</em> - The specified
     * property getter method will be called on the bean
     * identified by the <code>name</code> (and optional
     * <code>scope</code>) attributes, in order to return the
     * <code>java.util.Map</code> containing the parameters.</li>
     * </ul>
     * <p>As the <code>Map</code> is processed, the keys are assumed
     * to be the names of query parameters to be appended to the
     * hyperlink.  The value associated with each key must be either
     * a String or a String array representing the parameter value(s),
     * or an object whose toString() method will be called.
     * If a String array is specified, more than one value for the
     * same query parameter name will be created.</p>
     * <p>Additionally, you can request that the current transaction
     * control token, if any, be included in the generated hyperlink
     * by setting the <code>transaction</code> attribute to
     * <code>true</code>.
     * You can also request that an anchor ("#xxx") be added to the
     * end of the URL that is created by any of the above mechanisms,
     * by using the <code>anchor</code> attribute.</p>
     */
    interface FrameTagAttr {
        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>Logical name of a global <code>Action</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute,
         * or the <code>page</code> attribute.</p>
         * <p>Additionally, you can specify a <code>module</code> prefix
         * for linking to other modules.</p>
         */
        action?: string;

        /**
         * <p>Prefix name of a <code>Module</code> that
         * contains the action mapping for the <code>Action</code>
         * that is specified by the <code>action</code> attribute.
         * You <strong>must</strong> specify an <code>action</code>
         * attribute for this to have an effect.</p>
         * <p><strong>Note: </strong>Use "" to map to the default module.</p>
         */
        module?: string;

        /**
         * <p>Optional anchor tag ("#xxx") to be added to the generated
         * hyperlink.  Specify this value <strong>without</strong> any
         * "#" character.</p>
         */
        anchor?: string;

        /**
         * <p>Logical name of a global <code>ActionForward</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute,
         * or the <code>page</code> attribute.</p>
         */
        forward?: string;

        /**
         * <p>Should a frame border be generated around this frame (1)
         * or not (0)?</p>
         */
        frameborder?: string;

        /**
         * <p>Value for the <code>name</code> attribute of the rendered
         * <code><frame></code> element.</p>
         */
        frameName?: string;

        /**
         * <p>The URL to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute,
         * or the <code>page</code> attribute.</p>
         */
        href?: string;

        /**
         * <p>URI of a long description of the frame.  This description
         * should supplement the short description provided by the
         * <code>title</code> attribute, and may be particularly useful
         * for non-visual user agents.</p>
         */
        longdesc?: string;

        /**
         * <p>The amount of space (in pixels) to be left between the
         * frame's contents and its top and bottom margins.</p>
         */
        marginheight?: string;

        /**
         * <p>The amount of space (in pixels) to be left between the
         * frame's contents and its left and right margins.</p>
         */
        marginwidth?: string;

        /**
         * <p>The name of a JSP bean that contains a <code>Map</code>
         * representing the query parameters (if <code>property</code>
         * is not specified), or a JSP bean whose property getter is
         * called to return a <code>Map</code> (if <code>property</code>
         * is specified).</p>
         */
        name?: string;

        /**
         * <p>Should users be disallowed from resizing the frame?
         * (true, false).</p>
         */
        noresize?: string;

        /**
         * <p>The module-relative path (beginning with a "/"
         * character) to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify exactly
         * one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute,
         * or the <code>page</code> attribute.</p>
         */
        page?: string;

        /**
         * <p>The name of the request parameter that will be dynamically
         * added to the generated hyperlink.  The corresponding value is
         * defined by the <code>paramName</code> and (optional)
         * <code>paramProperty</code> attributes, optionally scoped by
         * the <code>paramScope</code> attribute</p>
         */
        paramId?: string;

        /**
         * <p>The name of a JSP bean that is a String containing the
         * value for the request parameter named by <code>paramId</code>
         * (if <code>paramProperty</code> is not specified), or a JSP
         * bean whose property getter is called to return a String
         * (if <code>paramProperty</code> is specified).  The JSP bean
         * is constrained to the bean scope specified by the
         * <code>paramScope</code> property, if it is specified.</p>
         */
        paramName?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>paramName</code> attribute, whose return value must
         * be a String containing the value of the request parameter
         * (named by the <code>paramId</code> attribute) that will be
         * dynamically added to this hyperlink.</p>
         */
        paramProperty?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>paramName</code> attribute.  If not specified,
         * all scopes are searched.</p>
         */
        paramScope?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>name</code> attribute, whose return value must be
         * a <code>java.util.Map</code> containing the query parameters
         * to be added to the hyperlink.  You <strong>must</strong>
         * specify the <code>name</code> attribute if you specify
         * this attribute.</p>
         */
        property?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>name</code> attribute.  If not specified, all
         * scopes are searched.</p>
         */
        scope?: string;

        /**
         * <p>Should scroll bars be created unconditionally (yes),
         * never (no), or only when needed (auto)?</p>
         */
        scrolling?: string;

        /**
         * <p>CSS styles to be applied to this element.</p>
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * <p>If set to <code>true</code>, any current transaction
         * control token will be included in the generated hyperlink,
         * so that it will pass an <code>isTokenValid()</code> test
         * in the receiving Action.</p>
         */
        transaction?: string;

    }

    /**
     * <html:hidden>
     * org.apache.struts.taglib.html.HiddenTag
     *
     * @description
     * <p><strong>
     * Render A Hidden Field
     * </strong></p>
     * <p>
     * Renders an HTML <input> element of type hidden, populated
     * from the specified value or the specified property of the bean
     * associated with our current form. This tag is only valid when
     * nested inside a form tag body.
     * </p>
     */
    interface HiddenTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * Valid only inside of <code>logic:iterate</code> tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The attribute name of the bean whose properties are consulted
         * when rendering the current value of this input field. If not
         * specified, the bean associated with the form tag we are nested
         * within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of this input field, and the name of the corresponding bean
         * property if value is not specified. The corresponding bean property
         * (if any) must be of type String.
         */
        property: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value to which this field should be initialized. [Use the
         * corresponding bean property value]
         */
        value?: string;

        /**
         * Should the value of this field also be rendered to the
         * response page to make it visible, in addition to creating
         * an HTML type="hidden" element?  By default, only the
         * hidden element is created.
         */
        write?: string;

    }

    /**
     * <html:html>
     * org.apache.struts.taglib.html.HtmlTag
     *
     * @description
     * <p><strong>Render an HTML <code><html></code> Element</strong></p>
     * <p>Renders an HTML <code><html></code> element with
     * language attributes extracted from the user's current Locale
     * object, if there is one.</p>
     */
    interface HtmlTagAttr {
        /**
         * Renders a lang attribute with the locale stored in the user's session.  If not
         * found in the session, the language from the <code>Accept-Language</code>
         * HTTP header is used.  If still not found, the default language for the server
         * is used.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2</dd></dl>
         */
        lang?: string;

        /**
         * <p>Set to <code>true</code> in order to render
         * <code>xml:lang</code> and <code>xmlns</code> attributes
         * on the generated <code>html</code> element.  This also
         * causes all other html tags to render as XHTML 1.0 (the
         * <html:xhtml/> tag has a similar purpose).
         * </p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.1</dd></dl>
         */
        xhtml?: string;

        /**
         * <p>Sets the version of XHTML to render in the String form
         * MAJOR.MINOR. The default is "1.0" when not specified.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.4</dd></dl>
         */
        xhtmlVersion?: string;

    }

    /**
     * <html:image>
     * org.apache.struts.taglib.html.ImageTag
     *
     * @description
     * <p><strong>
     * Render an input tag of type "image"
     * </strong></p>
     * <p>Renders an HTML <code><input></code> tag of type
     * "image".  The base URL for this image is calculated directly
     * based on the value specified in the <code>src</code> or
     * <code>page</code> attributes, or indirectly by looking up a
     * message resource string based on the <code>srcKey</code> or
     * <code>pageKey</code> attributes.  You <strong>must</strong>
     * specify exactly one of these attributes.</p>
     * <p>If you would like to obtain the coordinates of the mouse
     * click that submitted this request, see the information below
     * on the <code>property</code> attribute.</p>
     * <p>This tag is only valid when nested inside a form tag body.</p>
     */
    interface ImageTagAttr {
        /**
         * <p>The keyboard character used to move focus immediately
         * to this element.</p>
         */
        accesskey?: string;

        /**
         * <p>The alignment option for this image.</p>
         */
        align?: string;

        /**
         * <p>The alternate text for this image.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * image.</p>
         */
        altKey?: string;

        /**
         * <p>The width (in pixels) of the border around this image.</p>
         */
        border?: string;

        /**
         * <p>The servlet context attribute key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.</p>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * Valid only inside of logic:iterate tag.  If <code>true</code>
         * then name of the html tag will be rendered as
         * "propertyName[34]". Number in brackets will be generated for
         * every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * <p>The session attribute key for the Locale used to select
         * internationalized messages.  If not specified, defaults to the
         * Struts standard value.</p>
         */
        locale?: string;

        /**
         * <p>Prefix name of a <code>Module</code> that
         * the <code>page</code> or <code>pageKey</code>
         * attributes relate to.</p>
         */
        module?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus
         * and a key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus
         * and a key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus
         * and a key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under
         * the mouse pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under
         * the mouse pointer but the pointer was moved outside the
         * element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not
         * under the mouse pointer but the pointer is moved inside the
         * element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * <p>The module-relative path of the image for this
         * input tag.</p>
         */
        page?: string;

        /**
         * <p>The key of the message resources string specifying the
         * module-relative path of the image for this input tag.</p>
         */
        pageKey?: string;

        /**
         * <p>The property name of this image tag.  The parameter names
         * for the request will appear as "property.x" and "property.y",
         * the x and y representing the coordinates of the mouse click
         * for the image.  A way of retrieving these values through a
         * form bean is to define getX(), getY(), setX(), and setY()
         * methods, and specify your property as a blank string
         * (property="").</p>
         */
        property?: string;

        /**
         * <p>The source URL of the image for this input tag.</p>
         */
        src?: string;

        /**
         * <p>The key of the message resources string specifying the
         * source URL of the image for this input tag.</p>
         */
        srcKey?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * <p>The value that will be submitted if this image button
         * is pressed.</p>
         */
        value?: string;

    }

    /**
     * <html:img>
     * org.apache.struts.taglib.html.ImgTag
     *
     * @description
     * <p><strong>Render an HTML img tag</strong></p>
     * <p>Renders an HTML <code><img></code> element with
     * the image at the specified URL.  Like the link tag, URL
     * rewriting will be applied automatically to the value
     * specified in <code>src</code>, <code>page</code>, or
     * <code>action</code> to maintain session state
     * in the absence of cookies.  This will allow dynamic
     * generation of an image where the content displayed for this
     * image will be taken from the attributes of this tag.</p>
     * <p>The base URL for this image is calculated directly based on
     * the value specified in <code>src</code>, <code>page</code>, or
     * <code>action</code> or <code>page</code>,
     * or indirectly by looking up a message resource string based on
     * the <code>srcKey</code> or <code>pageKey</code> attributes.
     * You <strong>must</strong> specify exactly one of these
     * attributes.</p>
     * <p>Normally, the <code>src</code>, <code>page</code>, or
     * <code>action</code> that you specify will be left
     * unchanged (other than URL rewriting if necessary).  However,
     * there are two ways you can append one or more dynamically
     * defined query parameters to the <code>src</code> URL --
     * specify a single parameter with the <code>paramId</code>
     * attribute (at its associated attributes to select the value),
     * or specify the <code>name</code> (and optional
     * <code>property</code>) attributes to select a
     * <code>java.util.Map</code> bean that contains one or more
     * parameter ids and corresponding values.</p>
     * <p>To specify a single parameter, use the <code>paramId</code>
     * attribute to define the name of the request parameter to be
     * submitted.  To specify the corresponding value, use one of the
     * following approaches:</p>
     * <ul>
     * <li><em>Specify only the <code>paramName</code> attribute</em>
     * - The named JSP bean (optionally scoped by the value of the
     * <code>paramScope</code> attribute) must identify a value
     * that can be converted to a String.</li>
     * <li><em>Specify both the <code>paramName</code> and
     * <code>paramProperty</code> attributes</em> - The specified
     * property getter will be called on the JSP bean identified
     * by the <code>paramName</code> (and optional
     * <code>paramScope</code>) attributes, in order to select
     * a value that can be converted to a String.</li>
     * </ul>
     * <p>If you prefer to specify a <code>java.util.Map</code> that
     * contains all of the request parameters to be added to the
     * hyperlink, use one of the following techniques:</p>
     * <ul>
     * <li><em>Specify only the <code>name</code> attribute</em> -
     * The named JSP bean (optionally scoped by the value of
     * the <code>scope</code> attribute) must identify a
     * <code>java.util.Map</code> containing the parameters.</li>
     * <li><em>Specify both <code>name</code> and
     * <code>property</code> attributes</em> - The specified
     * property getter method will be called on the bean
     * identified by the <code>name</code> (and optional
     * <code>scope</code>) attributes, in order to return the
     * <code>java.util.Map</code> containing the parameters.</li>
     * </ul>
     * <p>As the <code>Map</code> is processed, the keys are assumed
     * to be the names of query parameters to be appended to the
     * <code>src</code> URL.  The value associated with each key
     * must be either a String or a String array representing the
     * parameter value(s), or an object whose toString() method
     * will be called.  If a String array is specified, more than
     * one value for the same query parameter name will be
     * created.</p>
     * <p>You can specify the alternate text for this image (which
     * most browsers display as pop-up text block when the user
     * hovers the mouse over this image) either directly, through
     * the <code>alt</code> attribute, or indirectly from a message
     * resources bundle, using the <code>bundle</code> and
     * <code>altKey</code> attributes.</p>
     */
    interface ImgTagAttr {
        /**
         * <p>Where the image is aligned to.  Can be one of the
         * following attributes:</p>
         * <ul>
         * <li>left - left justify, wrapping text on right</li>
         * <li>right -right justify, wrapping test on left</li>
         * <li>top - aligns the image with the top of the text on
         * the same row</li>
         * <li>middle - aligns the image's vertical center with the
         * text base line</li>
         * <li>bottom - aligns the image with the bottom of the
         * text's base line</li>
         * <li>texttop - aligns the image's top with that of the
         * text font on the same line</li>
         * <li>absmiddle - aligns the image's vertical center with the
         * absolute center of the text</li>
         * <li>absbottom - aligns the image with the absolute bottom
         * of the text font on the same row</li>
         * </ul>
         */
        align?: string;

        /**
         * <p>And alternative text to be displayed in browsers that
         * don't support graphics.  Also used often as type of
         * context help over images.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * <p>The width of the border surrounding the image.</p>
         */
        border?: string;

        /**
         * <p>The servlet context attribute key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.</p>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * <p>The height of the image being displayed.  This parameter
         * is very nice to specify (along with <code>width</code>)
         * to help the browser render the page faster.</p>
         */
        height?: string;

        /**
         * <p>The amount of horizontal spacing between the icon and
         * the text.  The text may be in the same paragraph, or
         * be wrapped around the image.</p>
         */
        hspace?: string;

        /**
         * <p>The scriptable name to be defined within this page, so
         * that you can reference it with intra-page scripts.  In other
         * words, the value specified here will render a "name" element
         * in the generated image tag.</p>
         */
        imageName?: string;

        /**
         * <p>The name of the server-side map that this image belongs
         * to.</p>
         */
        ismap?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * <p>The name of the request or session Locale attribute used
         * to look up internationalized messages.</p>
         */
        locale?: string;

        /**
         * <p>The name of a JSP bean that contains a <code>Map</code>
         * representing the query parameters (if <code>property</code>
         * is not specified), or a JSP bean whose property getter is
         * called to return a <code>Map</code> (if <code>property</code>
         * is specified).</p>
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a key down event.</p>
         */
        onkeydown?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a key press event.</p>
         */
        onkeypress?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a key up event.</p>
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * <p>The name of the request parameter that will be dynamically
         * added to the generated src URL.  The corresponding value is
         * defined by the <code>paramName</code> and (optional)
         * <code>paramProperty</code> attributes, optionally scoped by
         * the <code>paramScope</code> attribute</p>
         */
        paramId?: string;

        /**
         * <p>The module-relative path, starting with a slash, of
         * the image to be displayed by this tag.  The rendered
         * URL for this image will automatically prepend the context
         * path of this web application (in the same manner as the
         * <code>page</code> attribute on the link tag works),
         * in addition to any necessary URL rewriting.  You
         * <strong>must</strong> specify either the <code>page</code>
         * attribute or the <code>src</code> attribute.</p>
         */
        page?: string;

        /**
         * <p>The message key, in the message resources bundle named by
         * the <code>bundle</code> attribute, of the String to be
         * used as the module-relative path for this image.</p>
         */
        pageKey?: string;

        /**
         * <p>The action, starting with a slash, that will render
         * the image to be displayed by this tag.  The rendered
         * URL for this image will automatically prepend the context
         * path of this web application (in the same manner as the
         * <code>action</code> attribute on the link tag works),
         * in addition to any necessary URL rewriting.  You
         * <strong>must</strong> specify the <code>action</code>,
         * <code>page</code>
         * attribute or the <code>src</code> attribute.</p>
         * <p>Additionally, you can specify a <code>module</code> prefix
         * for linking to other modules.</p>
         */
        action?: string;

        /**
         * <p>Prefix name of a <code>Module</code> that
         * contains the action mapping for the <code>Action</code>
         * that is specified by the <code>action</code> attribute.
         * You <strong>must</strong> specify an <code>action</code>
         * attribute for this to have an effect.</p>
         * <p><strong>Note: </strong>Use "" to map to the default module.</p>
         */
        module?: string;

        /**
         * <p>The name of a JSP bean that is a String containing the
         * value for the request parameter named by <code>paramId</code>
         * (if <code>paramProperty</code> is not specified), or a JSP
         * bean whose property getter is called to return a String
         * (if <code>paramProperty</code> is specified).  The JSP bean
         * is constrained to the bean scope specified by the
         * <code>paramScope</code> property, if it is specified.</p>
         */
        paramName?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>paramName</code> attribute, whose return value must
         * be a String containing the value of the request parameter
         * (named by the <code>paramId</code> attribute) that will be
         * dynamically added to this src URL.</p>
         */
        paramProperty?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>paramName</code> attribute.  If not specified,
         * all scopes are searched.</p>
         */
        paramScope?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>name</code> attribute, whose return value must be
         * a <code>java.util.Map</code> containing the query parameters
         * to be added to the src URL.  You <strong>must</strong>
         * specify the <code>name</code> attribute if you specify
         * this attribute.</p>
         */
        property?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>name</code> attribute.  If not specified, all
         * scopes are searched.</p>
         */
        scope?: string;

        /**
         * <p>The URL to which this image will be transferred from
         * This image may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  This value will be used unmodified (other
         * than potential URL rewriting) as the value of the "src"
         * attribute in the rendered tag.  You <strong>must</strong>
         * specify either the <code>page</code> attribute or the
         * <code>src</code> attribute.</p>
         */
        src?: string;

        /**
         * <p>The message key, in the message resources bundle named by
         * the <code>bundle</code> attribute, of the String to be
         * used as the URL of this image.</p>
         */
        srcKey?: string;

        /**
         * <p>CSS styles to be applied to this element.</p>
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * <p>If set to <code>true</code>, LocalCharacterEncoding will be
         * used, that is, the characterEncoding set to the HttpServletResponse,
         * as prefered character encoding rather than UTF-8, when
         * URLEncoding is done on parameters of the URL.</p>
         */
        useLocalEncoding?: string;

        /**
         * <p>The name of the map as defined within this page for
         * mapping hot-spot areas of this image.</p>
         */
        usemap?: string;

        /**
         * <p>The amount of vertical spacing between the icon and
         * the text, above and below.</p>
         */
        vspace?: string;

        /**
         * <p>The width of the image being displayed.  This parameter
         * is very nice to specify (along with <code>height</code>)
         * to help the browser render the page faster.</p>
         */
        width?: string;

    }

    /**
     * <html:javascript>
     * org.apache.struts.taglib.html.JavascriptValidatorTag
     *
     * @description
     * <p><strong>
     * Render JavaScript validation based on the
     * validation rules loaded by the ValidatorPlugIn.
     * </strong></p>
     * <p>
     * Render JavaScript validation based on the
     * validation rules loaded by the <code>ValidatorPlugIn</code>.
     * The set of validation rules that should be generated is based
     * on the formName attribute passed in, which should match
     * the name attribute of the form element in the xml file.
     * </p>
     * <p>
     * The dynamicJavascript and staticJavascript attributes
     * default to true, but if dynamicJavascript is set to <code>true</code>
     * and staticJavascript is set to <code>false</code> then only
     * the dynamic JavaScript will be rendered.  If dynamicJavascript
     * is set to <code>false</code>
     * and staticJavascript is set to <code>true</code> then only
     * the static JavaScript will be rendered which can then be put in
     * separate JSP page so the browser can cache the static JavaScript.
     * </p>
     */
    interface JavascriptValidatorTagAttr {
        /**
         * <p>
         * If set to "true" and XHTML has been enabled, the JavaScript will
         * be wrapped in a CDATA section to prevent XML parsing. The default is
         * "true" to comply with the W3C's recommendation.
         * </p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.1</dd></dl>
         */
        cdata?: string;

        /**
         * <p>
         * Whether or not to render the dynamic JavaScript.
         * Defaults to <code>true</code>.
         * </p>
         */
        dynamicJavascript?: string;

        /**
         * <p>
         * The key (form name) to retrieve a specific
         * set of validation rules.  If "dynamicJavascript" is set
         * to <code>true</code> and formName is missing or is not
         * recognized by the <code>ValidatorPlugIn</code>, a
         * JspException will be thrown.
         * </p>
         */
        formName?: string;

        /**
         * <p>
         * The alternate JavaScript method name to be used
         * instead of the of the default.  The default is
         * 'validate' concatenated in front of
         * the key (form name) passed in (ex: validateRegistrationForm).
         * </p>
         */
        method?: string;

        /**
         * <p>
         * The current page of a set of validation rules
         * if the page attribute for the field element
         * in the xml file is in use.
         * </p>
         */
        page?: string;

        /**
         * The <script> element will not contain a language attribute
         * when this is set to false.  The default is true but this property is ignored
         * in XHTML mode.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2</dd></dl>
         */
        scriptLanguage?: string;

        /**
         * <p>
         * The src attribute's value when defining
         * the html script element.
         * </p>
         */
        src?: string;

        /**
         * <p>
         * Whether or not to render the static JavaScript.
         * Defaults to <code>true</code>.
         * </p>
         */
        staticJavascript?: string;

        /**
         * <p>
         * Whether or not to enclose the javascript
         * with HTML comments.  This attribute is ignored in XHTML
         * mode because the script would be deleted by the XML parser.  See
         * the cdata attribute for details on hiding scripts from XML
         * parsers.
         * Defaults to <code>true</code>.
         * </p>
         */
        htmlComment?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.7</dd></dl>
         */
        bundle?: string;

    }

    /**
     * <html:label>
     * org.apache.struts.taglib.html.LabelTag
     *
     * @description
     * <p><strong>Render a Label</strong></p>
     */
    interface LabelTagAttr {
        /**
         * <p>The keyboard character used to move focus immediately to this
         * element.</p>
         */
        accesskey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use when printing the label value. If not
         * specified, defaults to the application resources configured
         * for our action servlet.
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         */
        dir?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         */
        errorStyleId?: string;

        /**
         * <p>Identifier to be attached to this label (renders
         * a "for" attribute) when the identifier is different
         * than the property name.</p>
         */
        forId?: string;

        /**
         * If specified, defines the message key to be looked up in
         * the resource bundle specified by <code>bundle</code> for
         * the value displayed to the user for this label.  If not
         * specified, the value to be displayed is taken from the body
         * content of this tag.
         */
        key?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The attribute name of the bean whose properties are consulted
         * when rendering the current value of this input field. If not
         * specified, the bean associated with the form tag we are nested
         * within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of this input field, and the name of the corresponding bean
         * property if value is not specified. The corresponding bean property
         * (if any) must be of type String.
         */
        property: string;

        /**
         * <p>Specifies that this label represents a required field.</p>
         */
        required?: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

    }

    /**
     * <html:link>
     * org.apache.struts.taglib.html.LinkTag
     *
     * @description
     * <p><strong>Render an HTML anchor or hyperlink</strong></p>
     * <p>Renders an HTML <code><a></code> element as an
     * anchor definition (if "linkName" is specified) or as a
     * hyperlink to the specified URL.  URL rewriting will be
     * applied automatically, to maintain session state in the
     * absence of cookies.  The content displayed for this
     * hyperlink will be taken from the body of this tag.</p>
     * <p>The base URL for this hyperlink is calculated based on
     * which of the following attributes you specify (you must
     * specify exactly one of them):</p>
     * <ul>
     * <li><em>forward</em> - Use the value of this attribute as the
     * name of a global <code>ActionForward</code> to be looked
     * up, and use the module-relative or context-relative
     * URI found there. If the forward is module-relative then
     * it must point to an action and NOT to a page.</li>
     * <li><em>action</em> - Use the value of this attribute as the
     * name of a <code>Action</code> to be looked
     * up, and use the module-relative or context-relative
     * URI found there.</li>
     * <li><em>href</em> - Use the value of this attribute unchanged.
     * </li>
     * <li><em>page</em> - Use the value of this attribute as a
     * module-relative URI, and generate a server-relative
     * URI by including the context path and module
     * prefix.</li>
     * </ul>
     * <p>Normally, the hyperlink you specify with one of the
     * attributes described in the previous paragraph will be left
     * unchanged (other than URL rewriting if necessary).  However,
     * there are three ways you can append one or more dynamically
     * defined query parameters to the hyperlink -- specify a single
     * parameter with the <code>paramId</code> attribute (and its
     * associated attributes to select the value), or specify the
     * <code>name</code> (and optional <code>property</code>)
     * attributes to select a <code>java.util.Map</code> bean that
     * contains one or more parameter ids and corresponding values,
     * or nest one or more <html:param> tags in the tag body.
     * </p>
     * <p>To specify a single parameter, use the <code>paramId</code>
     * attribute to define the name of the request parameter to be
     * submitted.  To specify the corresponding value, use one of the
     * following approaches:</p>
     * <ul>
     * <li><em>Specify only the <code>paramName</code> attribute</em>
     * - The named JSP bean (optionally scoped by the value of the
     * <code>paramScope</code> attribute) must identify a value
     * that can be converted to a String.</li>
     * <li><em>Specify both the <code>paramName</code> and
     * <code>paramProperty</code> attributes</em> - The specified
     * property getter method will be called on the JSP bean
     * identified by the <code>paramName</code> (and optional
     * <code>paramScope</code>) attributes, in order to select
     * a value that can be converted to a String.</li>
     * </ul>
     * <p>If you prefer to specify a <code>java.util.Map</code> that
     * contains all of the request parameters to be added to the
     * hyperlink, use one of the following techniques:</p>
     * <ul>
     * <li><em>Specify only the <code>name</code> attribute</em> -
     * The named JSP bean (optionally scoped by the value of
     * the <code>scope</code> attribute) must identify a
     * <code>java.util.Map</code> containing the parameters.</li>
     * <li><em>Specify both <code>name</code> and
     * <code>property</code> attributes</em> - The specified
     * property getter method will be called on the bean
     * identified by the <code>name</code> (and optional
     * <code>scope</code>) attributes, in order to return the
     * <code>java.util.Map</code> containing the parameters.</li>
     * </ul>
     * <p>As the <code>Map</code> is processed, the keys are assumed
     * to be the names of query parameters to be appended to the
     * hyperlink.  The value associated with each key must be either
     * a String or a String array representing the parameter value(s),
     * or an object whose toString() method will be called.
     * If a String array is specified, more than one value for the
     * same query parameter name will be created.</p>
     * <p>Supplmenting these two methods, you can nest one or more
     * <html:param> tags to dynamically add parameters in a
     * logic-friendly way (such as executing a for loop that
     * assigns the name/value pairs at runtime). This method does
     * not compete with the aforementioned; it will adds its
     * parameters <em>in addition</em> to whatever parameters are
     * already specified.</p>
     * <p>Additionally, you can request that the current transaction
     * control token, if any, be included in the generated hyperlink
     * by setting the <code>transaction</code> attribute to
     * <code>true</code>.
     * You can also request that an anchor ("#xxx") be added to the
     * end of the URL that is created by any of the above mechanisms,
     * by using the <code>anchor</code> attribute.</p>
     */
    interface LinkTagAttr {
        /**
         * <p>The keyboard character used to move focus immediately
         * to this element.</p>
         */
        accesskey?: string;

        /**
         * <p>Logical name of a <code>Action</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         * <p>Additionally, you can specify a <code>module</code> prefix
         * for linking to other modules.</p>
         */
        action?: string;

        /**
         * <p>Prefix name of a <code>Module</code> that
         * contains the action mapping for the <code>Action</code>
         * that is specified by the <code>action</code> attribute.
         * You <strong>must</strong> specify an <code>action</code>
         * attribute for this to have an effect.</p>
         * <p><strong>Note: </strong>Use "" to map to the default module.</p>
         */
        module?: string;

        /**
         * <p>Optional anchor tag ("#xxx") to be added to the generated
         * hyperlink.  Specify this value <strong>without</strong> any
         * "#" character. Exactly one of <code>forward</code>,
         * <code>href</code>, or <code>page</code> attribute must still
         * be specified with the anchor.</p>
         */
        anchor?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * <p>Logical name of a global <code>ActionForward</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         */
        forward?: string;

        /**
         * <p>The URL to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         */
        href?: string;

        /**
         * Valid only inside of logic:iterate tag.
         * If <code>true</code> then indexed parameter with name from indexId attribute
         * will be added to the query string. Indexed parameter looks like
         * "index[32]". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * By this attribute different name for the indexed parameter can be
         * specified. Take a look to the "indexed" attribute for details.
         */
        indexId?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * <p>The anchor name to be defined within this page, so that
         * you can reference it with intra-page hyperlinks.  In other
         * words, the value specified here will render a "name" element
         * in the generated anchor tag.</p>
         */
        linkName?: string;

        /**
         * <p>The name of a JSP bean that contains a <code>Map</code>
         * representing the query parameters (if <code>property</code>
         * is not specified), or a JSP bean whose property getter is
         * called to return a <code>Map</code> (if <code>property</code>
         * is specified).</p>
         */
        name?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element loses input focus.</p>
         */
        onblur?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse click.</p>
         */
        onclick?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse double click.</p>
         */
        ondblclick?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives input focus.</p>
         */
        onfocus?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a key down event.</p>
         */
        onkeydown?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a key press event.</p>
         */
        onkeypress?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a key up event.</p>
         */
        onkeyup?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse down event.</p>
         */
        onmousedown?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse move event.</p>
         */
        onmousemove?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse out event.</p>
         */
        onmouseout?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse over event.</p>
         */
        onmouseover?: string;

        /**
         * <p>JavaScript event handler that is executed when
         * this element receives a mouse up event.</p>
         */
        onmouseup?: string;

        /**
         * <p>The module-relative path (beginning with a "/"
         * character) to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify exactly
         * one of the <code>action</code> attribute,
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         */
        page?: string;

        /**
         * <p>The name of the request parameter that will be dynamically
         * added to the generated hyperlink.  The corresponding value is
         * defined by the <code>paramName</code> and (optional)
         * <code>paramProperty</code> attributes, optionally scoped by
         * the <code>paramScope</code> attribute</p>
         */
        paramId?: string;

        /**
         * <p>The name of a JSP bean that is a String containing the
         * value for the request parameter named by <code>paramId</code>
         * (if <code>paramProperty</code> is not specified), or a JSP
         * bean whose property getter is called to return a String
         * (if <code>paramProperty</code> is specified).  The JSP bean
         * is constrained to the bean scope specified by the
         * <code>paramScope</code> property, if it is specified.</p>
         */
        paramName?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>paramName</code> attribute, whose return value must
         * be a String containing the value of the request parameter
         * (named by the <code>paramId</code> attribute) that will be
         * dynamically added to this hyperlink.</p>
         */
        paramProperty?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>paramName</code> attribute.  If not specified,
         * all scopes are searched.</p>
         */
        paramScope?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>name</code> attribute, whose return value must be
         * a <code>java.util.Map</code> containing the query parameters
         * to be added to the hyperlink.  You <strong>must</strong>
         * specify the <code>name</code> attribute if you specify
         * this attribute.</p>
         */
        property?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>name</code> attribute.  If not specified, all
         * scopes are searched.</p>
         */
        scope?: string;

        /**
         * <p>CSS styles to be applied to this element.</p>
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * <p>The tab order (ascending positive integers) for
         * this element.</p>
         */
        tabindex?: string;

        /**
         * <p>The window target in which the resource requested by this
         * hyperlink will be displayed, for example in a framed
         * presentation.</p>
         */
        target?: string;

        /**
         * <p>The advisory title for this hyperlink.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * <p>If set to <code>true</code>, any current transaction
         * control token will be included in the generated hyperlink,
         * so that it will pass an <code>isTokenValid()</code> test
         * in the receiving Action.</p>
         */
        transaction?: string;

        /**
         * <p>If set to <code>true</code>, LocalCharacterEncoding will be
         * used, that is, the characterEncoding set to the HttpServletResponse,
         * as prefered character encoding rather than UTF-8, when
         * URLEncoding is done on parameters of the URL.</p>
         */
        useLocalEncoding?: string;

    }

    /**
     * <html:param>
     * org.apache.struts.taglib.html.ParamTag
     *
     * @description
     * <p>Adds a parameter to the following tags:
     * <ol>
     * <li><html:frame></li>
     * <li><html:link></li>
     * <li><html:rewrite></li>
     * </ol>
     * </p>
     * <dl><dt><b>Since:</b></dt>
     * <dd>Struts 1.3.6</dd></dl>
     */
    interface ParamTagAttr {
        /**
         * <p>The String containing the name of the request parameter.</p>
         */
        name: string;

        /**
         * <p>The value of the request parameter specified by the
         * <code>name</code> attribute, whose return value must
         * be a String or String[] that will be dynamically added to
         * this hyperlink.</p>
         */
        value?: string;

    }

    /**
     * <html:messages>
     * org.apache.struts.taglib.html.MessagesTag
     *
     * @description
     * <p><strong>
     * Conditionally display a set of accumulated messages.
     * </strong></p>
     * <p>Displays a set of messages prepared by a business
     * logic component and stored as an <code>ActionMessages</code>
     * object, <code>ActionErrors</code> object, a String,
     * or a String array in any scope.  If
     * such a bean is not found, nothing will be rendered.  The messages are
     * placed into the page scope in the body of this tag where they can be displayed
     * by standard JSP methods. (For example: <code><bean:write></code>,<code><c:out></code>)
     * </p>
     * <p>In order to use this tag successfully, you must have
     * defined an application scope <code>MessageResources</code>
     * bean under the default attribute name.</p>
     */
    interface MessagesTagAttr {
        /**
         * The name of a page scope JSP bean that will contain the current
         * element of the collection of messages on each iteration, if it is not
         * <code>null</code>.
         */
        id: string;

        /**
         * The servlet context attribute key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         */
        bundle?: string;

        /**
         * By default no filtering to escape XML characters like "<"
         * occurs on the replacement values going into the message pattern.
         * If this attribute is set to 'true', the replacement values will
         * be filtered, while the text of the message pattern itself will
         * be left intact. This can be useful if you have markup in your
         * message patterns which you want to keep, but would like to
         * filter the replacement values going into them, e.g. if they
         * reflect user input. For instance:
         * <pre>errors.divideZero=The mathematical expression
         * <strong>{0}</strong> caused a divide by zero.</pre>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.4</dd></dl>
         */
        filterArgs?: string;

        /**
         * The session attribute key for the Locale used to select
         * messages to be displayed.  If not specified, defaults to
         * the Struts standard value.
         */
        locale?: string;

        /**
         * Name of the bean in any scope under which our messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.
         */
        name?: string;

        /**
         * Name of the property for which messages should be
         * displayed.  If not specified, all messages (regardless
         * of property) are displayed.
         */
        property?: string;

        /**
         * This value is an optional message resource key that will
         * be printed before the iteration of messages begins.
         */
        header?: string;

        /**
         * This value is an optional message resource key that will
         * be printed after the iteration of messages has finished.
         */
        footer?: string;

        /**
         * By default the tag will retrieve the bean it will
         * iterate over from the <code>Globals.ERROR_KEY</code> constant string,
         * but if this attribute is set to 'true' the bean
         * will be retrieved from the <code>Globals.MESSAGE_KEY</code>
         * constant string.  Also if this is set to 'true', any value
         * assigned to the name attribute will be ignored.
         */
        message?: string;

        /**
         * Specifies the name of the page-scoped attribute to set
         * with the message count for the specified property. This
         * is useful, for instance, when needing to display the number
         * of field errors produced by a form submission.
         * The attribute goes out of scope after the tag executes.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.4</dd></dl>
         */
        count?: string;

    }

    /**
     * <html:multibox>
     * org.apache.struts.taglib.html.MultiboxTag
     *
     * @description
     * <p><strong>
     * Render A Checkbox Input Field
     * </strong></p>
     * <p>Renders an HTML <input> element of type
     * <code>checkbox</code>, whose "checked" status is
     * initialized based on whether the specified value
     * matches one of the elements of the underlying
     * property's array of current values. This element is
     * useful when you have large numbers of checkboxes, and
     * prefer to combine the values into a single
     * array-valued property instead of multiple boolean
     * properties.  This tag is only valid when nested
     * inside a form tag body.</p>
     * <p><strong>WARNING</strong>:  In order to correctly
     * recognize cases where none of the associated checkboxes
     * are selected, the <code>ActionForm</code> bean
     * associated with this form must include a statement
     * setting the corresponding array to zero length in the
     * <code>reset()</code> method.</p>
     * <p>The value to be returned to the server, if this checkbox is
     * selected, must be defined by one of the following methods:</p>
     * <ul>
     * <li>Specify a <code>value</code> attribute, whose contents will
     * be used literally as the value to be returned.</li>
     * <li>Specify no <code>value</code> attribute, and the nested
     * body content of this tag will be used as the value to be
     * returned.</li>
     * </ul>
     * <p>
     * Also note that a map backed attribute cannot be used to hold a the String[]
     * for a group of multibox tags.
     * </p>
     */
    interface MultiboxTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * The attribute name of the bean whose properties are consulted when
         * rendering the current value of this input field. If not specified,
         * the bean associated with the form tag we are nested within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * The value to be transmitted if this checkbox is
         * checked when the form is submitted.
         */
        value?: string;

    }

    /**
     * <html:option>
     * org.apache.struts.taglib.html.OptionTag
     *
     * @description
     * <p><strong>
     * Render A Select Option
     * </strong></p>
     * <p>Render an HTML <code><option></code> element,
     * representing one of the choices for an enclosing
     * <code><select></code> element.  The text displayed to the
     * user comes from either the body of this tag, or from a message
     * string looked up based on the <code>bundle</code>,
     * <code>locale</code>, and <code>key</code> attributes.</p>
     * <p>If the value of the corresponding bean property matches the
     * specified value, this option will be marked selected.  This tag
     * is only valid when nested inside a
     * <code><html:select></code> tag body.</p>
     */
    interface OptionTagAttr {
        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this option should be
         * disabled.
         */
        disabled?: string;

        /**
         * Set to <code>true</code> if you want the option label to be
         * filtered for sensitive characters in HTML.  By default, such
         * a value is NOT filtered.
         */
        filter?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * If specified, defines the message key to be looked up in
         * the resource bundle specified by <code>bundle</code> for
         * the text displayed to the user for this option.  If not
         * specified, the text to be displayed is taken from the body
         * content of this tag.
         */
        key?: string;

        /**
         * The session attributes key for the Locale instance to use
         * for looking up the message specified by the
         * <code>key</code> attribute.  If not specified, uses the
         * standard Struts session attribute name.
         */
        locale?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * <p>The advisory title for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.4</dd></dl>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.4</dd></dl>
         */
        titleKey?: string;

        /**
         * Value to be submitted for this field if this option is
         * selected by the user.
         */
        value: string;

    }

    /**
     * <html:options>
     * org.apache.struts.taglib.html.OptionsTag
     *
     * @description
     * <p><strong>
     * Render a Collection of Select Options
     * </strong></p>
     * <p>Renders a set of HTML <code><option></code> elements,
     * representing possible choices for a <code><select></code>
     * element.  This tag can be used multiple times within a single
     * <code><html:select></code> element, either in conjunction
     * with or instead of one or more <code><html:option></code>
     * or <code><html:optionsCollection></code> elements.</p>
     * <p>This tag operates in one of two major modes, depending on
     * whether or not the <code>collection</code> attribute is
     * specified.  If the <code>collection</code> attribute is
     * included, the following rules apply:</p>
     * <ul>
     * <li>The <strong>collection</strong> attribute is interpreted
     * as the name of a JSP bean, in some scope, that itself
     * represents a collection of individual beans, one per option
     * value to be rendered.</li>
     * <li>The <strong>property</strong> attribute is interpreted as
     * the name of a property of the individual beans included in
     * the collection, and is used to retrieve the value that will
     * be returned to the server if this option is selected.</li>
     * <li>The <strong>labelProperty</strong> attribute is interpreted
     * as the name of a property of the individual beans included
     * in the collection, and is used to retrieve the label that
     * will be displayed to the user for this option.  If the
     * <code>labelProperty</code> attribute is not specified, the
     * property named by the <code>property</code> attribute will
     * be used to select both the value returned to the server and
     * the label displayed to the user for this option.</li>
     * </ul>
     * <p>If the <code>collection</code> attribute is not specified,
     * the rules described in the remainder of this section apply.</p>
     * <p>The collection of values actually selected depends on the presence or
     * absence of the <code>name</code> and <code>property</code> attributes.  The
     * following combinations are allowed:</p>
     * <ul>
     * <li><em>Only <code>name</code> is specified</em> - The value of this attribute
     * is the name of a JSP bean in some scope that is the
     * collection.</li>
     * <li><em>Only <code>property</code> is specified</em> - The value of this
     * attribute is the name of a property of the ActionForm bean associated
     * with our form, which will return the collection.</li>
     * <li><em>Both <code>name</code> and <code>property</code> are specified</em> -
     * The value of the <code>name</code> attribute identifies a JSP bean
     * in some scope.  The value of the <code>property</code> attribute is the
     * name of some property of that bean which will return the collection.</li>
     * </ul>
     * <p>The collection of labels displayed to the user can be the same as the
     * option values themselves, or can be different, depending on the presence or
     * absence of the <code>labelName</code> and <code>labelProperty</code>
     * attributes.  If this feature is used, the collection of labels must contain
     * the same number of elements as the corresponding collection of values.
     * The following combinations are allowed:</p>
     * <ul>
     * <li><em>Neither <code>labelName</code> nor <code>labelProperty</code> is
     * specified</em> - The labels will be the same as the option values
     * themselves.</li>
     * <li><em>Only <code>labelName</code> is specified</em> - The value of this
     * attribute is the name of a JSP bean in some scope that is the
     * collection.</li>
     * <li><em>Only <code>labelProperty</code> is specified</em> - The value of this
     * attribute is the name of a property of the ActionForm bean associated
     * with our form, which will return the collection.</li>
     * <li><em>Both <code>labelName</code> and <code>labelProperty</code> are
     * specified</em> - The value of the <code>labelName</code> attribute
     * identifies a JSP bean in some scope.  The value of the
     * <code>labelProperty</code> attribute is the name of some property of
     * that bean which will return the collection.</li>
     * </ul>
     * <p>Note that this tag does not support a <code>styleId</code>
     * attribute, as it would have to apply the value to all the
     * <code>option</code> elements created by this element, which would
     * mean that more than one <code>id</code> element might have the same
     * value, which the HTML specification says is illegal.</p>
     */
    interface OptionsTagAttr {
        /**
         * Name of the JSP bean (in some scope) which is itself a
         * Collection of other beans, each of which has properties
         * named by the "property" and "labelProperty" attributes
         * that are used to retrieve the value and label for each
         * option, respectively.
         */
        collection?: string;

        /**
         * Set to <code>false</code> if you do NOT want the option labels
         * filtered for sensitive characters in HTML.  By default, such
         * values are filtered.
         */
        filter?: string;

        /**
         * Name of the JSP bean (in some scope) containing the collection of labels to
         * be displayed to the user for these options.
         */
        labelName?: string;

        /**
         * Property of the form bean, or the bean specified by the labelName
         * attribute, that will return the collection of labels to be displayed
         * to the user for these options.
         */
        labelProperty?: string;

        /**
         * Name of the JSP bean (in some scope) containing the collection of
         * values to be returned to the server for these options. If not
         * specified, the form bean associated with our form is assumed.
         */
        name?: string;

        /**
         * Property of the form bean, or the bean specified by the name
         * attribute, that will return the collection of values to returned
         * to the server for these options.
         */
        property?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

    }

    /**
     * <html:optionsCollection>
     * org.apache.struts.taglib.html.OptionsCollectionTag
     *
     * @description
     * <p><strong>
     * Render a Collection of Select Options
     * </strong></p>
     * <p>Renders a set of HTML <code><option></code> elements,
     * representing possible choices for a <code><select></code>
     * element.  This tag can be used multiple times within a single
     * <code><html:select></code> element, either in conjunction
     * with or instead of one or more <code><html:option></code>
     * or <code><html:options></code> elements.</p>
     * <p>This tag operates on a collection of beans, where each bean
     * has a <strong>label</strong> property and a <strong>value</strong>
     * property. The actual names of these properties can be configured
     * using the <code>label</code> and <code>value</code> attributes
     * of this tag.</p>
     * <p>This tag differs from the <code><html:options></code> tag
     * in that it makes more consistent use of the <code>name</code> and
     * <code>property</code> attributes, and allows the collection to be
     * more easily obtained from the enclosing form bean.</p>
     * <p>Note that this tag does not support a <code>styleId</code>
     * attribute, as it would have to apply the value to all the
     * <code>option</code> elements created by this element, which would
     * mean that more than one <code>id</code> element might have the same
     * value, which the HTML specification says is illegal.</p>
     */
    interface OptionsCollectionTagAttr {
        /**
         * Set to <code>false</code> if you do NOT want the option labels
         * filtered for sensitive characters in HTML.  By default, such
         * values are filtered.
         */
        filter?: string;

        /**
         * The property of the bean within the collection which represents
         * the label to be rendered for each option. Defaults to "label".
         */
        label?: string;

        /**
         * The attribute name of the bean whose properties are consulted
         * when rendering the current value of this input field. If not
         * specified, the bean associated with the form tag we are nested
         * within is utilized.
         */
        name?: string;

        /**
         * The property of the form bean, or the bean specified by the name
         * attribute, that will return the collection of objects to be
         * rendered for these options.
         */
        property?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * The property of the bean within the collection which represents
         * the value to be rendered for each option. Defaults to "value".
         */
        value?: string;

    }

    /**
     * <html:password>
     * org.apache.struts.taglib.html.PasswordTag
     *
     * @description
     * <p><strong>
     * Render A Password Input Field
     * </strong></p>
     * Renders an HTML <input> element of type password, populated
     * from the specified value or the specified property of the bean
     * associated with our current form. This tag is only valid when
     * nested inside a form tag body.
     */
    interface PasswordTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of logic:iterate tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * Maximum number of input characters to accept. [No limit]
         */
        maxlength?: string;

        /**
         * The attribute name of the bean whose properties are consulted when
         * rendering the current value of this input field. If not specified,
         * the bean associated with the form tag we are nested within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * JavaScript event handler executed when a
         * when a user selects some text in a text field.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.10</dd></dl>
         */
        onselect?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property: string;

        /**
         * Set to <code>true</code> if this input field should be
         * read only.
         */
        readonly?: string;

        /**
         * Boolean flag indicating whether or not existing values
         * will be redisplayed if they exist.  Even though the
         * redisplayed value will be shown as asterisks on the
         * visible HTML page, the cleartext of the actual password
         * value will be visible though the "Show Page Source"
         * menu option of the client browser.  You may wish to
         * set this value to <code>false</code> on login pages.
         * Defaults to <code>true</code> for consistency with
         * all other form tags that redisplay their contents.
         */
        redisplay?: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * Number of character positions to allocate. [Browser default]
         */
        size?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value of the label to be placed on this button. This value will
         * also be submitted as the value of the specified request parameter.
         * [Body of this tag (if any)]
         */
        value?: string;

    }

    /**
     * <html:radio>
     * org.apache.struts.taglib.html.RadioTag
     *
     * @description
     * <p><strong>
     * Render A Radio Button Input Field
     * </strong></p>
     * <p>
     * Renders an HTML <input> element of type radio, populated from
     * the specified property of the bean associated with our current form.
     * This tag is only valid when nested inside a form tag body.
     * </p>
     * <p>
     * If an iterator is used to render a series of radio tags, the
     * idName attribute may be used to specify the name of the bean
     * exposed by the iterator. In this case, the value attribute is
     * used as the name of a property on the idName bean that returns
     * the value of the radio tag in this iteration.
     * </p>
     */
    interface RadioTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of logic:iterate tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The attribute name of the bean whose properties are consulted when
         * rendering the current value of this input field. If not specified,
         * the bean associated with the form tag we are nested within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * The corresponding bean property for this radio tag.
         */
        property: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * The value of the radio tag.
         */
        value: string;

        /**
         * <p>Name of the bean (in some scope) that will return the
         * value of the radio tag. Usually exposed
         * by an iterator. When the idName attribute is
         * present, the value attribute is used as the name of the
         * property on the idName bean that will return the
         * value of the radio tag for this iteration.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.1</dd></dl>
         */
        idName?: string;

    }

    /**
     * <html:reset>
     * org.apache.struts.taglib.html.ResetTag
     *
     * @description
     * <p><strong>
     * Render A Reset Button Input Field
     * </strong></p>
     * Renders an HTML <input> element of type reset.
     */
    interface ResetTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the input field that will be generated.
         */
        property?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value of the label to be placed on this button.
         * [Body of this tag (if any), or "Reset"]
         */
        value?: string;

    }

    /**
     * <html:rewrite>
     * org.apache.struts.taglib.html.RewriteTag
     *
     * @description
     * <p><strong>Render an URI</strong></p>
     * <p>Renders a request URI based on exactly the same rules
     * as the <code><html:link></code> tag does,
     * but without creating
     * the <code><a></code> hyperlink.  This value is useful
     * when you want to generate a string constant for use by
     * a JavaScript procedure.</p>
     */
    interface RewriteTagAttr {
        /**
         * <p>Logical name of a <code>Action</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description. You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, or the <code>page</code>
         * attribute.</p>
         * <p>Additionally, you can specify a <code>module</code> prefix
         * for linking to other modules.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.0</dd></dl>
         */
        action?: string;

        /**
         * <p>Prefix name of a <code>Module</code> that
         * contains the action mapping for the <code>Action</code>
         * that is specified by the <code>action</code> attribute.
         * You <strong>must</strong> specify an <code>action</code>
         * attribute for this to have an effect.</p>
         * <p><strong>Note: </strong>Use "" to map to the default module.</p>
         */
        module?: string;

        /**
         * <p>Optional anchor tag ("#xxx") to be added to the generated
         * hyperlink.  Specify this value <strong>without</strong> any
         * "#" character.</p>
         */
        anchor?: string;

        /**
         * <p>Logical name of a global <code>ActionForward</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, or the <code>page</code>
         * attribute.</p>
         */
        forward?: string;

        /**
         * <p>The URL to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, or the <code>page</code>
         * attribute.</p>
         */
        href?: string;

        /**
         * <p>The name of a JSP bean that contains a <code>Map</code>
         * representing the query parameters (if <code>property</code>
         * is not specified), or a JSP bean whose property getter is
         * called to return a <code>Map</code> (if <code>property</code>
         * is specified).</p>
         */
        name?: string;

        /**
         * <p>The module-relative path (beginning with a "/"
         * character) to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify exactly
         * one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute, or the <code>page</code>
         * attribute.</p>
         */
        page?: string;

        /**
         * <p>The name of the request parameter that will be dynamically
         * added to the generated hyperlink.  The corresponding value is
         * defined by the <code>paramName</code> and (optional)
         * <code>paramProperty</code> attributes, optionally scoped by
         * the <code>paramScope</code> attribute</p>
         */
        paramId?: string;

        /**
         * <p>The name of a JSP bean that is a String containing the
         * value for the request parameter named by <code>paramId</code>
         * (if <code>paramProperty</code> is not specified), or a JSP
         * bean whose property getter is called to return a String
         * (if <code>paramProperty</code> is specified).  The JSP bean
         * is constrained to the bean scope specified by the
         * <code>paramScope</code> property, if it is specified.</p>
         */
        paramName?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>paramName</code> attribute, whose return value must
         * be a String containing the value of the request parameter
         * (named by the <code>paramId</code> attribute) that will be
         * dynamically added to this hyperlink.</p>
         */
        paramProperty?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>paramName</code> attribute.  If not specified,
         * all scopes are searched.</p>
         */
        paramScope?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>name</code> attribute, whose return value must be
         * a <code>java.util.Map</code> containing the query parameters
         * to be added to the hyperlink.  You <strong>must</strong>
         * specify the <code>name</code> attribute if you specify
         * this attribute.</p>
         */
        property?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>name</code> attribute.  If not specified, all
         * scopes are searched.</p>
         */
        scope?: string;

        /**
         * <p>If set to <code>true</code>, any current transaction
         * control token will be included in the generated hyperlink,
         * so that it will pass an <code>isTokenValid()</code> test
         * in the receiving Action.</p>
         */
        transaction?: string;

        /**
         * <p>If set to <code>true</code>, LocalCharacterEncoding will be
         * used, that is, the characterEncoding set to the HttpServletResponse,
         * as prefered character encoding rather than UTF-8, when
         * URLEncoding is done on parameters of the URL.</p>
         */
        useLocalEncoding?: string;

    }

    /**
     * <html:select>
     * org.apache.struts.taglib.html.SelectTag
     *
     * @description
     * <p><strong>
     * Render A Select Element
     * </strong></p>
     * <p>Renders an HTML <select> element, associated
     * with a bean property specified by our attributes.  This
     * tag is only valid when nested inside a form tag body.
     * </p>
     * <p>This tag operates in two modes, depending upon the
     * state of the <code>multiple</code> attribute, which
     * affects the data type of the associated property you
     * should use:</p>
     * <ul>
     * <li><em>multiple="false" or multiple IS NOT selected</em> -
     * The corresponding property should be a scalar
     * value of any supported data type.</li>
     * <li><em>multiple="true" IS selected</em> -
     * The corresponding property should be an array
     * of any supported data type.</li>
     * </ul>
     * <p><strong>WARNING</strong>:  In order to correctly
     * recognize cases where no selection at all is made, the
     * <code>ActionForm</code> bean associated with this form
     * must include a statement resetting the scalar property
     * to a default value (if <code>multiple</code> is not
     * set), or the array property to zero length (if
     * <code>multiple</code> is set) in the
     * <code>reset()</code> method.</p>
     */
    interface SelectTagAttr {
        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of logic:iterate tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * If set to any arbitrary value except 'false,
         * the rendered select element will support
         * multiple selections.
         */
        multiple?: string;

        /**
         * The attribute name of the bean whose properties are consulted
         * to determine which option should be pre-selected when rendering
         * this input field.  If not specified, the bean associated with
         * the enclosing <code><html:form></code> tag is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * The number of available options displayed at one time.
         */
        size?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * The value to compare with for marking an option selected.
         */
        value?: string;

    }

    /**
     * <html:submit>
     * org.apache.struts.taglib.html.SubmitTag
     *
     * @description
     * <p><strong>
     * Render A Submit Button
     * </strong></p>
     * Renders an HTML <input> element of type <code>submit</code>.
     * <p>
     * If a graphical button is needed (a button with an image), then the
     * <code><html:image></code> tag is more appropriate.
     * </p>
     */
    interface SubmitTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * Valid only inside of logic:iterate tag.  If <code>true</code>
         * then name of the html tag will be rendered as
         * "propertyName[34]". Number in brackets will be generated for
         * every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * Name of the request parameter that will be included with this
         * submission, set to the specified value.
         */
        property?: string;

        /**
         * CSS styles to be applied to this HTML element.
         */
        style?: string;

        /**
         * CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).
         */
        styleClass?: string;

        /**
         * Identifier to be assigned to this HTML element (renders
         * an "id" attribute).
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * The value of the button label.
         */
        value?: string;

    }

    /**
     * <html:text>
     * org.apache.struts.taglib.html.TextTag
     *
     * @description
     * <p><strong>Render An Input Field of Type text</strong></p>
     * <p>Render an input field of type text.  This tag is only valid when
     * nested inside a form tag body.</p>
     */
    interface TextTagAttr {
        /**
         * <p>The keyboard character used to move focus immediately to this
         * element.</p>
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of logic:iterate tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * Maximum number of input characters to accept. [No limit]
         */
        maxlength?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The attribute name of the bean whose properties are consulted
         * when rendering the current value of this input field. If not
         * specified, the bean associated with the form tag we are nested
         * within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * JavaScript event handler executed when a
         * when a user selects some text in a text field.
         */
        onselect?: string;

        /**
         * Name of this input field, and the name of the corresponding bean
         * property if value is not specified. The corresponding bean property
         * (if any) must be of type String.
         */
        property: string;

        /**
         * Set to <code>true</code> if this input field should be
         * read only.
         */
        readonly?: string;

        /**
         * Number of character positions to allocate. [Browser default]
         */
        size?: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value to which this field should be initialized. [Use the
         * corresponding bean property value]
         */
        value?: string;

    }

    /**
     * <html:textarea>
     * org.apache.struts.taglib.html.TextareaTag
     *
     * @description
     * <p><strong>
     * Render A Textarea
     * </strong></p>
     * Render a textarea element.  This tag is only valid when nested
     * inside a form tag body.
     */
    interface TextareaTagAttr {
        /**
         * The keyboard character used to move focus immediately to this
         * element.
         */
        accesskey?: string;

        /**
         * <p>The alternate text for this element.</p>
         */
        alt?: string;

        /**
         * <p>The message resources key of the alternate text for this
         * element.</p>
         */
        altKey?: string;

        /**
         * The servlet context attributes key for the MessageResources
         * instance to use.  If not specified, defaults to the
         * application resources configured for our action servlet.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        bundle?: string;

        /**
         * The number of columns to display.
         */
        cols?: string;

        /**
         * <p>The direction for weak/neutral text for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        dir?: string;

        /**
         * Set to <code>true</code> if this input field should be
         * disabled.
         */
        disabled?: string;

        /**
         * <p>Name of the bean (in any scope) under which our error messages
         * have been stored.  If not present, the name specified by the
         * <code>Globals.ERROR_KEY</code> constant string will be used.</p>
         * <p><strong>N.B.</strong> This is used in conjunction with the
         * <code>errorStyle</code>, <code>errorStyleClass</code> and
         * <code>errorStyleId</code> attributes and should be set to
         * the same value as the <code>name</code> attribute on the
         * <html:errors/> tag.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorKey?: string;

        /**
         * <p>CSS styles to be applied to this HTML element if
         * an error exists for it.</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>style</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyle?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element if
         * an error exists for it (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleClass</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element if
         * an error exists for it (renders an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, this overrides the
         * <code>styleId</code> attribute in the event of an error.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.2.5</dd></dl>
         */
        errorStyleId?: string;

        /**
         * Valid only inside of logic:iterate tag.
         * If <code>true</code> then name of the html tag will be rendered as
         * "id[34].propertyName". Number in brackets will be generated
         * for every iteration and taken from ancestor logic:iterate tag.
         */
        indexed?: string;

        /**
         * <p>The language code for this element.</p>
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.3.6</dd></dl>
         */
        lang?: string;

        /**
         * The attribute name of the bean whose properties are consulted
         * when rendering the current value of this input field. If not
         * specified, the bean associated with the form tag we are nested
         * within is utilized.
         */
        name?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus.
         */
        onblur?: string;

        /**
         * JavaScript event handler executed when this element loses input
         * focus and its value has changed.
         */
        onchange?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse click.
         */
        onclick?: string;

        /**
         * JavaScript event handler executed when this element receives a
         * mouse double click.
         */
        ondblclick?: string;

        /**
         * JavaScript event handler executed when this element receives input
         * focus.
         */
        onfocus?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed.
         */
        onkeydown?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is depressed and released.
         */
        onkeypress?: string;

        /**
         * JavaScript event handler executed when this element has focus and a
         * key is released.
         */
        onkeyup?: string;

        /**
         * JavaScript event handler executed when this element is under the mouse
         * pointer and a mouse button is depressed.
         */
        onmousedown?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and the pointer is moved.
         */
        onmousemove?: string;

        /**
         * JavaScript event handler executed when this element was under the
         * mouse pointer but the pointer was moved outside the element.
         */
        onmouseout?: string;

        /**
         * JavaScript event handler executed when this element was not under
         * the mouse pointer but the pointer is moved inside the element.
         */
        onmouseover?: string;

        /**
         * JavaScript event handler executed when this element is under the
         * mouse pointer and a mouse button is released.
         */
        onmouseup?: string;

        /**
         * JavaScript event handler executed when a
         * when a user selects some text in a text field.
         */
        onselect?: string;

        /**
         * Name of this input field, and the name of the corresponding bean
         * property if value is not specified. The corresponding bean property
         * (if any) must be of type String.
         */
        property: string;

        /**
         * Set to <code>true</code> if this input field should be
         * read only.
         */
        readonly?: string;

        /**
         * The number of rows to display.
         */
        rows?: string;

        /**
         * <p>CSS styles to be applied to this HTML element.</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyle</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        style?: string;

        /**
         * <p>CSS stylesheet class to be applied to this HTML element
         * (renders a "class" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleClass</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleClass?: string;

        /**
         * <p>Identifier to be assigned to this HTML element (renders
         * an "id" attribute).</p>
         * <p><strong>N.B.</strong> If present, the <code>errorStyleId</code>
         * overrides this attribute in the event of an error for the element.</p>
         */
        styleId?: string;

        /**
         * The tab order (ascending positive integers) for this element.
         */
        tabindex?: string;

        /**
         * <p>The advisory title for this element.</p>
         */
        title?: string;

        /**
         * <p>The message resources key for the advisory title
         * for this element.</p>
         */
        titleKey?: string;

        /**
         * Value to which this field should be initialized. [Use the
         * corresponding bean property value]
         */
        value?: string;

    }

    /**
     * <html:xhtml>
     * org.apache.struts.taglib.html.XhtmlTag
     *
     * @description
     * <p><strong>Render HTML tags as XHTML</strong></p>
     * <p>
     * Using this tag in a page tells all other html taglib tags
     * to render themselves as XHTML 1.0.  This is useful
     * when composing pages with JSP includes or Tiles.
     * <html:html xhtml="true"> has a similar effect.
     * </p>
     * <p>
     * <strong>Note</strong>: Included pages do not inherit the rendering
     * style of the including page by default. Without setting the
     * <code>scope</code> attribute, which defaults to <code>page</code>
     * scope, each JSP fragment or Tile must use this tag to render as
     * XHTML.
     * </p>
     */
    interface XhtmlTagAttr {
        /**
         * <p>Specifies the variable scope searched to retrieve the rendering
         * setting.  If not specified, the default is page scope.</p>
         */
        scope?: string;

    }
}
