/* eslint-disable no-template-curly-in-string */
export default {
  navigation: {
    module: 'Modules',
    page: 'Pages',
    chart: 'Charts',
    automation: 'Automation',
    publicPages: 'Public pages',
    configuration: 'Configuration',
    adminPanel: 'Admin panel',
    more: 'More',
  },
  block: {
    general: {
      title: 'Add new block',
      changeBlock: 'Change existing block',
      titleLabel: '$t(general.label.title)',
      titlePlaceholder: 'Block title',
      descriptionLabel: '$t(general.label.description)',
      descriptionPlaceholder: 'Block description',
      preview: 'Preview:',
      previewBody: 'Body',
      headerStyle: 'Block header style',
      bodyStyle: 'Block body style',
      border: 'Show border',
      module: 'Module',
      style: {
        default: 'Primary variant',
        secondary: 'Secondary variant',
        white: 'White variant',
        light: 'Light variant',
        dark: 'Dark variant',
        success: 'Success variant',
        warning: 'Warning variant',
        danger: 'Danger variant',
        whiteBg: 'White background',
        lightBg: 'Light background',
        darkBg: 'Dark background',
        noBorder: 'No border',

      },
    },
    recordOrganizer: {
      label: 'Record organizer',
      noRecords: 'No records in module linked with record organizer. Drag and drop records here.',
      labelField: {
        label: 'Label field',
        footnote: 'Field value will be used as record label',
      },
      descriptionField: {
        label: 'Description field',
        footnote: 'Field value will be used as record description',
      },
      positionField: {
        label: 'Record sort field',
        footnote: 'Records will be sorted based on this field',
      },
      groupField: {
        label: 'Key field',
        footnote: 'Field whose value will change when a record is moved into the record organizer',
      },
      group: {
        label: 'Key value',
        footnote: 'Value that will be set to the key field',
      },
      preview: {
        label: 'Record Organizer block for module {{0}}. Label field {{1}}, Description field {{2}}. Value setting field: {{3}}, Sorted by position field: {{4}}.',
        moduleNotSelected: 'Record Organizer block. Module not selected.',
      },
    },
    file: {
      label: 'File',
      preview: {
        label: 'File block',
      },
    },
    calendar: {
      label: 'Calendar',
      calendarHeader: 'Calendar header',
      hideHeader: 'Hide calendar header',
      hideNavigation: 'Hide prev/next button',
      hideToday: 'Hide today button',
      hideTitle: 'Hide title text',
      eventsSource: 'Configure events source',
      noModule: '(No module)',
      noField: '(No field)',
      noFieldOneHour: '(No field, event will last 1 hour)',
      eventStart: 'Event start',
      eventEnd: 'Event end',
      eventAllDay: 'Show as all-day-events',
      addEventsSource: 'Add events source',
      view: {
        enabled: 'Enabled views',
        default: 'Default view',
        footnote: 'Make sure default is one of the available views',
        month: 'Month',
        agendaMonth: 'Month agenda',
        agendaWeek: 'Week agenda',
        agendaDay: 'Day agenda',
        listMonth: 'Month list',
        listWeek: 'Week list',
        listDay: 'Day list',
      },
    },
    automation: {
      label: 'Automation',
      script: 'Script',
      manualScript: 'Manual scripts',
      pickScript: 'Pick a script',
      scriptFootnote: 'Select from the list of manual scripts. Disabled and incompatible (different module) scripts are disabled.',
      button: 'Buttons',
      primaryButton: 'Primary button',
      secondaryButton: 'Secondary button',
      lightButton: 'Light button',
      successButton: 'Success button',
      dangerButton: 'Danger button',
      warningButton: 'Warning button',
      darkButton: 'Dark button',
      buttonFootnote: 'A list of manual scripts, accessible via click on a button (rename and reorder as you see fit)',
    },
    recordList: {
      label: 'Record list',
      moduleFootnote: 'Disabled modules on the list do not have {{0}} available.',
      recordPages: 'record pages',
      addRecord: 'Add new record',
      pagination: 'Showing {from} to {to} of {count} records|{count} records|One record',
      record: {
        newLabel: 'New records',
        hideAddButton: 'Hide add record button',
        prefilterLabel: 'Prefilter records',
        prefilterPlaceholder: 'field1 = 1 AND field2 = 232',
        prefilterFootnote: 'Simplified SQL condition (WHERE ...) syntax is supported. Variables like {{0}}, {{1}} and {{2}} are evaluated (when available)',
        prefilterHideSearch: 'Hide search box',
        presortLabel: 'Presort records',
        presortPlaceholder: 'field1 DESC, field2 ASC',
        presortFootnote: 'Simplified SQL condition (ORDER BY ...) syntax is supported.',
        presortHideSort: 'Hide sorting',
        perPage: 'Records per page',
        hidePaging: 'Hide paging',
        noPermission: 'No permission to read record',
      },
      preview: {
        recordFromModule: 'Showing records from {{0}} module with columns: {{1}}',
        isHidden: '{{0}} is hidden.',
        isShown: '{{0}} is shown',
        isDisabled: '{{0}} is disabled.',
        isEnabled: '{{0}} is enabled.',
        bePaged: '{{0}} be paged.',
        addRecordButton: 'Add record button',
        usersSee: 'Users see {{0}}.',
        searchInput: 'Search inputbox',
        usersSearchThrough: 'Users search through the records.',
        resultsPrefiltered: 'Results are prefiltered:',
        tableHeader: 'Table header',
        sorting: 'Sorting',
        withPresortedRecords: 'with presorted ({{0}}) records.',
        resultsCant: 'Results can not',
        resultsCan: 'Results can',
        recordsPerPage: '{{0}} records are shown per page.',
        moduleNotSelected: 'Block with table of records, module not selected.',
      },
      export: {
        allow: 'Allow records export',
        selectFields: 'Select fields you want to export:',
        limitations: 'CSV export limitation: only the first value in the multi value fields will be exported',
        rangeBy: 'Set range by:',
        dateRange: 'Select date range:',
        recordCount: '{{count}} records ready for export',
        json: 'JSON Export',
        csv: 'CSV Export',

        all: 'Export all records',
        inRange: 'Set date range',

        filter: {
          createdAt: 'Record created',
          updatedAt: 'Record updated',
          lastMonth: 'Last month',
          thisMonth: 'This month',
          lastWeek: 'Last week',
          thisWeek: 'This week',
          today: 'Today',
          custom: 'Custom',
        },
      },
      import: {
        to: 'Import to {{modulename}}',
        uploadFile: 'Upload the file you want to import (.csv or JSON format)',
        dropzoneLabel: 'Click or drop file here to upload (.csv or JSON)',
        matchFields: 'match imported columns with existing ones',
        fileColumns: 'File columns',
        moduleFields: 'Module fields',
        pickModuleField: 'Pick a module field',
        progress: '{{completed}}/{{entryCount}} rows',
        success: 'Import successful',
        failed: 'Import failed, please try again. Reason: {{failReason}}',
        onError: 'If any record fails to import:',
        onErrorFail: 'Cancel import',
        onErrorSkip: 'Skip record',
      },
    },
    record: {
      label: 'Record',
      deleteRecord: 'Delete record',
      confirmDelete: 'Are you sure you want to delete this record?',
      preview: {
        fieldsFromModule: 'Single record block, displaying fields ({{0}}) from module {{1}}',
        blockNoRecord: 'Can not render this block without a record',
        untitled: 'Untitled',
      },
    },
    socialFeed: {
      label: 'Social media feed',
      twitterProfileField: 'Field that contains Twitter Profile URL for a record',
      twitterProfileLabel: 'Twitter Profile URL for list pages i.e (https://twitter.com/bloomberg)',
      noInput: 'No input for displaying social feed...',
      preview: {
        socialFeed: 'Social feed',
      },
    },
    chart: {
      label: 'Chart',
      display: 'Chart to display inside this block:',
      pick: 'Pick a chart',
      preview: {
        chartId: 'Chart preview (ID {{0}})',
      },
    },
    content: {
      label: 'Content',
    },
  },
  module: {
    title: 'List of modules',
    newLabel: 'Create a new module:',
    newPlaceholder: '$t(general.label.moduleName)',
    recordPage: 'Record page for module',
    import: 'Import module(s):',
    edit: {
      title: 'Edit module',
      manageRecordFields: 'Manage record fields',
      moduleFieldSettings: 'Module field settings',
      newField: 'Add new field',
      systemFields: 'System fields:',
      reorderFields: 'Reorder fields',
      tooltip: {
        name: 'Must be a-z/A-Z, 0-9 or underscore',
        title: 'The name displayed in form input / data lists',
        multi: 'Allows the field to hold multiple values',
        required: 'Required field',
        sensitive: 'Sensitive data',
      },
    },
    recordGenerator: {
      notUsable: 'Can not use generator, no faker lib.',
      forModule: 'Record generator for',
      howManyRecords: 'How many fake ecords do you want to create?',
      generate: 'Generate!',
      sampleRoll: 'Sample {{0}}',
      rollTheDice: 'roll the dice',
    },
  },
  page: {
    title: 'List of pages',
    visible: 'Visible',
    recordPage: 'Record page',
    newLabel: 'Create a new page:',
    newPlaceholder: 'Page title',
    noBlock: 'No block added yet',
    import: 'Import page(s):',
    edit: {
      title: 'Edit page',
      pageDescription: 'Page description',
      visible: 'Page visible',
    },
    build: {
      addBlock: 'Add block',
      selectBlockTitle: 'Select type of the new block',
      selectBlockFootnote: 'Some types might be disabled for non-record pages',
    },
  },
  chart: {
    title: 'List of charts',
    newLabel: 'Create a new chart:',
    newPlaceholder: 'Chart name',
    import: 'Import chart(s):',
    edit: {
      title: 'Chart builder',
      modulePick: 'Pick a module',
      loadData: 'Load data',
      filter: {
        label: 'Filters',
        noFilter: '(no filter)',
        recordsCreatedThisYear: 'Records created this year',
        recordsCreatedLastYear: 'Records created last year',
        recordsCreatedThisQuarter: 'Records created this quarter',
        recordsCreatedLastQuarter: 'Records created last quarter',
        recordsCreatedThisMonth: 'Records created this month',
        recordsCreatedLastMonth: 'Records created last month',
        customize: 'Customize filter',
      },
      dimension: {
        label: 'Dimensions (datetime & select fields)',
        fieldLabel: 'Field',
        fieldPlaceholder: 'Select a dimension field',
        skipMissingValues: 'Skip missing values',
        defaultValueLabel: 'Default value',
        defaultValueFootnote: 'Use this value for missing dimension values',
        calculateLabelCount: 'Calculate how many labels can be shown',
        function: {
          label: 'Function',
          placeholder: 'Select dimension modifier (bucket size)',
          none: '(no grouping / buckets)',
          date: 'DATE',
          week: 'WEEK',
          month: 'MONTH',
          quarter: 'QUARTER',
          year: 'YEAR',
        },
      },
      metric: {
        label: 'Metrics (numeric fields)',
        labelLabel: 'Label',
        labelPlaceholder: 'Total',
        fieldLabel: 'Field',
        fieldPlaceholder: 'Select metric field',
        logarithmicScale: 'Logarithmic scale',
        axisOnRight: 'Place axis on the right side',
        axisScaleFromZero: 'Always begin axis scale at zero',
        fillArea: 'Fill area below the line',
        fixTooltips: 'Always show tooltips',
        relative: 'Show relative value',
        relativePrecision: 'Precision:',
        add: 'Add metric',
        function: {
          label: 'Function',
          placeholder: 'Select metric aggregate function',
          countd: 'COUNTD',
          sum: 'SUM',
          max: 'MAX',
          min: 'MIN',
          avg: 'AVG',
          std: 'STD',
        },
        output: {
          label: 'Output',
          placeholder: 'Select metric output',
          line: 'Line',
          bar: 'Bar',
          pie: 'Pie',
          doughnut: 'Doughnut',
        },
      },
    },
  },
  automation: {
    title: 'List of automation script',
    newLabel: 'Create a new script',
    newPlaceholder: 'Script name',
    import: 'Import automation script(s)',

    list: {
      unnamed: '(Unnamed script)',
      column: {
        label: {
          async: 'Async.',
          runAs: 'Run As',
          runInUA: 'In browser',
          critical: 'Critical',
          enabled: 'Enabled',
        },
      },
    },

    edit: {
      settingsTabLabel: 'Settings',

      title: 'Automation script',

      nameLabel: 'Name',
      namePlaceholder: 'Automation script name',

      criticalLabel: 'Critical script',
      criticalHelp: 'Wait until this script is executed. In case of errors, abort execution of other scripts and before* trigger',

      asyncLabel: 'Run this script asynchronously',
      asyncHelp: 'Do not wait for results and ignore errors. Incompatible with critical flag.',

      runInUALabel: 'Run in browser',
      runInUAHelp: 'Run this script in user\'s browser (user-agent). ' +
        'Less reliable but allows better interaction with the user and ability to write' +
        ' interactive scripts and automation flows.',

      enabledLabel: 'Enabled',
      enabledHelp: 'Disabled scripts will be ignored',

      securityLabel: 'Security',
      runAsHelp: 'Scripts can be ran with with privileges of the user running it (user/runner not set) or with privileges of a predefined user (user/runner selected). Incompatible with "run-in-browser".',
      userPickerPlaceholder: 'Select user',
      runAsCurrentUser: 'Run as "{{ user }}"',

      timeoutLabel: 'Script execution timeout',
      timeoutPlaceholder: '1500',
      timeoutHelp: 'How much time do we wait before aborting the script? Value in milliseconds (1000ms = 1s). It defaults (when 0) to 2s with 30s as maximum. Consult with your administrator for exact numbers and limitations.',

      codeTabLabel: 'Code',

      scheduledTriggers: {
        tabLabel: 'Scheduled',
      },

      recordTriggers: {
        tabLabel: 'Record triggers ({{0}})',

        filterPlaceholder: 'Filter module list',

        manualNoCondition: 'Manual run for this script (not module specific)',
        manual: 'manual',
        before: 'before',
        after: 'after',
        create: 'create',
        update: 'update',
        delete: 'delete',
      },
    },
    testing: {
      parametersHeadline: 'Parameters & payload:',
      resultsHeadline: 'Results:',
      recordID: 'Record ID',
      moduleID: 'Module ID',
      modulePickerPlaceholder: 'Select module for this script',
      load: 'Load',
      testInCorredor: 'Test in Corredor',
      testInBrowser: 'Test in Browser',
      warning: 'Testing can affect your records if scripts use API (eg: SaveRecord, DeleteRecord, ...). Executing ' +
        'same script in browser and in Corredor should produce the same results in most cases but output will most ' +
        'likely be formatted differently.',
      recordPreloadText: 'Fill payload with existing record:',
    },
  },
  general: {
    label: {
      openBookmarks: 'Open bookmarks',
      buttons: 'Buttons',
      name: 'Name',
      actions: 'Actions',
      status: 'Status',
      title: 'Title',
      description: 'Description',
      type: 'Type',
      multi: 'Multiple values',
      required: 'Required',
      sensitive: 'Sensitive',
      updatedAt: '$t(field.system.updatedAt)',
      pageBuilder: 'Page builder',
      moduleName: 'Module name',
      search: 'Search',
      create: 'Create',
      edit: 'Edit',
      save: 'Save',
      saveAndClose: 'Save and close',
      saveAndPreview: 'Save and Preview',
      add: 'Add',
      addNew: 'Add new',
      addValue: 'Add new value',
      close: 'Close',
      delete: 'Delete',
      back: 'Back',
      backWithoutSave: 'Back (without saving changes)',
      dropFiles: 'Click or drop files here to upload',
      loading: 'Loading',
      uploading: 'Uploading',
      download: 'Download',
      attachmentFileInfo: '(File size: {{0}}, uploaded {{1}})',
      yes: 'Yes',
      no: 'No',
      view: 'View',
      processing: 'Processing...',
      import: 'Import',
      export: 'Export',
      cancel: 'Cancel',
      next: 'Next',
      makeDefault: 'Make default',
      removeDefault: 'Remove default',
      none: 'None',
    },
    tooltip: {
      dragAndDrop: 'Drag and drop to change order',
    },
  },
  permission: {
    saveChanges: 'Save changes',
    resetBack: 'Reset back to "{{current}}"',
    setFor: 'Set permissions for {{target}}',
    namespace: {
      all: 'all namespaces',
      specific: 'namespace "{{target}}"',
    },
    module: {
      all: 'all modules',
      specific: 'module "{{target}}"',
    },
    'module-field': {
      all: 'all module fields',
      specific: 'field "{{target}}"',
    },
    page: {
      all: 'all pages',
      specific: 'page "{{target}}"',
    },
    'automation-script': {
      all: 'all automation scripts',
      specific: 'automation script "{{target}}"',
    },
    chart: {
      all: 'all charts',
      specific: 'chart "{{target}}"',
    },
    'compose-namespace': {
      read: {
        title: 'Read any namespace',
        specific: 'Read namespace "{{target}}"',
        description: '',
      },
      update: {
        title: 'Update any namespace',
        specific: 'Update namespace "{{target}}"',
        description: '',
      },
      'delete': {
        title: 'Delete any namespace',
        specific: 'Delete namespace "{{target}}"',
        description: '',
      },
      manage: {
        title: 'Manage any namespace',
        specific: 'Manage namespace "{{target}}"',
        description: 'Allow access to namespace\'s admin pages',
      },
      'module-create': {
        title: 'Create modules under any namespace',
        specific: 'Create modules under namespace "{{target}}"',
        description: '',
      },
      'chart-create': {
        title: 'Create charts under any namespace',
        specific: 'Create charts under namespace "{{target}}"',
        description: '',
      },
      'page-create': {
        title: 'Create pages under any namespace',
        specific: 'Create pages under namespace "{{target}}"',
        description: '',
      },
      'trigger-create': {
        title: 'Create triggers under any namespace',
        specific: 'Create triggers under namespace "{{target}}"',
        description: '',
      },
    },
    'compose-page': {
      read: {
        title: 'Read any page',
        specific: 'Read page "{{target}}"',
        description: 'Default: deny',
      },
      update: {
        title: 'Update any page',
        specific: 'Update page "{{target}}"',
        description: 'Default: deny',
      },
      'delete': {
        title: 'Delete any page',
        specific: 'Delete page "{{target}}"',
        description: 'Default: deny',
      },
    },
    'compose-automation-script': {
      read: {
        title: 'Read any script',
        specific: 'Read script "{{target}}"',
        description: 'Default: deny',
      },
      update: {
        title: 'Update any script',
        specific: 'Update script "{{target}}"',
        description: 'Default: deny',
      },
      'delete': {
        title: 'Delete any script',
        specific: 'Delete script "{{target}}"',
        description: 'Default: deny',
      },
    },
    'compose-automation-trigger': {
      run: {
        title: 'Run any trigger (on any script)',
        specific: 'Can run this trigger',
        description: 'Controls ability to run scripts through manual (or user-invoked) triggers either explicitly or implicitly through browser (Scripts, runnable in User-Agent). Other kinds of automation scripts and triggers that run implicitly on the backend are always executed. Default: allow',
      },
    },
    'compose-module': {
      read: {
        title: 'Read any module',
        specific: 'Read module "{{target}}"',
        description: 'Default: deny',
      },
      update: {
        title: 'Update any module',
        specific: 'Update module "{{target}}"',
        description: 'Default: deny',
      },
      'delete': {
        title: 'Delete any module',
        specific: 'Delete module "{{target}}"',
        description: 'Default: deny',
      },
      'record-create': {
        title: 'Create record of any module',
        specific: 'Create record of module "{{target}}"',
        description: 'Default: deny',
      },
      'record-read': {
        title: 'Read records of any module',
        specific: 'Read record of module "{{target}}"',
        description: 'Default: deny',
      },
      'record-update': {
        title: 'Update records of any module',
        specific: 'Update record of module "{{target}}"',
        description: 'Default: deny',
      },
      'record-delete': {
        title: 'Delete records of any module',
        specific: 'Delete record of module "{{target}}"',
        description: 'Default: deny',
      },
      'automation-trigger-manage': {
        title: 'Can manage automation triggers on any module',
        specific: 'Can manage automation triggers on module "{{target}}"',
        description: 'Default: deny',
      },
    },
    'compose-module-field': {
      'record-value-read': {
        title: 'Read record fields of any module',
        specific: 'Read "{{target}}" record fields ',
        description: 'Default: deny',
      },
      'record-value-update': {
        title: 'Update record fields of any module',
        specific: 'Update "{{target}}" record fields ',
        description: 'Default: deny',
      },
    },
    'compose-chart': {
      read: {
        title: 'Read any chart',
        specific: 'Read chart "{{target}}"',
        description: 'Default: deny',
      },
      update: {
        title: 'Update any chart',
        specific: 'Update chart "{{target}}"',
        description: 'Default: deny',
      },
      delete: {
        title: 'Delete any chart',
        specific: 'Delete chart "{{target}}"',
        description: 'Default: deny',
      },
    },
  },
  field: {
    noPermission: 'No permission to read field value',
    options: {
      multiDelimiter: {
        label: 'Multiple value delimiter',
        customLabel: 'Or use a custom delimiter',
        customPlaceholder: 'Enter a custom delimiter',
        newline: 'Each value in a new line',
        comma: 'Separated by a comma',
        custom: 'A custom delimiter',
      },
    },
    system: {
      ownedBy: 'Owned by',
      createdBy: 'Created by',
      createdAt: 'Created at',
      updatedBy: 'Updated by',
      updatedAt: 'Updated at',
      deletedBy: 'Deleted by',
      deletedAt: 'Deleted at',
    },
    kind: {
      bool: {
        label: 'Checkbox (Y/N)',
        checkedValueLabel: 'Value when checked',
        checkedValuePlaceholder: 'Checked value',
        uncheckedValueLabel: 'Value when unchecked',
        uncheckedValuePlaceholder: 'Unchecked value',
      },
      dateTime: {
        label: 'Date and time',
        dateOnly: 'Date Only',
        timeOnly: 'Time Only',
        pastValuesOnly: 'Past Values Only',
        futureValuesOnly: 'Future Value Only',
        relativeOutput: 'Output Relative value (eg: 3 days ago)',
        outputFormat: 'Output format:',
        outputFormatFootnote: 'See {{0}} for formatting options',
        warning: {
          pastValuesOnly: 'Only dates in the future will be saved!',
          futureValuesOnly: 'Only dates in the past will be saved!',
        },
      },
      email: {
        label: 'Email',
        preventToLink: 'Don\'t turn email into a link',
      },
      select: {
        label: 'Select',
        placeholder: 'Select an option by clicking here',
        optionsLabel: 'Options to select from',
        optionRemove: 'Remove',
        optionAdd: 'Add',
        optionPlaceholder: 'Add more',
        optionType: {
          label: 'Multiple value input type',
          default: 'Single input',
          each: 'Input for each value',
          multiple: 'Multiple select',
        },
      },
      number: {
        label: 'Number',
        prefixLabel: 'Prefix',
        prefixPlaceholder: 'Prefix',
        suffixLabel: 'Suffix',
        suffixPlaceholder: 'Suffix',
        precisionLabel: 'Precision',
        precisionPlaceholder: 'Precision',
        formatLabel: 'Format',
        formatPlaceholder: 'Format',
        examplesLabel: 'Format examples:',
        exampleInput: 'Input',
        exampleFormat: 'Format',
        exampleResult: 'Result',
      },
      record: {
        label: 'Record',
        moduleLabel: 'Module name',
        modulePlaceholder: 'Pick module',
        recordFieldLabel: 'Record label from field',
        recordFieldPlaceholder: 'Pick field',
        queryFieldsLabel: 'Query fields on search',
        suggestionPlaceholder: 'Start typing to search for records',
      },
      string: {
        label: 'String',
        multiLine: 'Multi line',
        richText: 'Use Rich Text Editor',
      },
      url: {
        label: 'URL',
        trimHash: 'Trim \'#\' from the Url',
        trimQuestionMark: 'Trim \'?\' from the Url',
        trimToDomain: 'Trim Url down to domain only',
        sshOnly: 'Only allow SSL (https) Url',
        preventToLink: 'Don\'t turn Url into a link',
      },
      user: {
        label: 'User',
        presetWithCurrentUser: 'Preset with current user',
        suggestionPlaceholder: 'Start typing to search for users by email or name',
        na: 'N/A',
      },
      file: {
        label: 'File',
        view: {
          modeLabel: 'View mode',
          modeFootnote: 'How files are represented in record page blocks',
          list: 'List',
          grid: 'Grid',
          single: 'Single image',
          gallery: 'Gallery of images',
        },
      },
    },
    selector: {
      available: 'Columns available',
      selected: 'Columns selected',
      selectAll: 'Select all',
      unselectAll: 'Unselect all',
      systemField: '(system field)',
      footnote: 'Add fields by dragging or double-clicking on them. Selected fields can also be reordered',
    },
  },
  namespace: {
    clickOpen: 'Click to open',
    title: 'Compose Namespaces',
    create: 'Create namespace',
    edit: 'Edit "{{name}}"',
    disabled: 'Namespace is disabled',
    setPermissions: 'Set namespace permissions',
    name: {
      label: 'Full namespace name',
      placeholder: 'Enter namespace name',
    },
    description: {
      label: 'Namespace description',
      placeholder: 'Enter namespace description',
    },
    subtitle: {
      label: 'Subtitle',
      placeholder: 'Enter namespace subtitle',
    },
    slug: {
      label: 'Short name',
      placeholder: 'Enter a short name for the namespace',
      description: 'The short name will be used in the URL',
    },
    enabled: {
      label: 'Enable namespace',
    },
  },
  preview: {
    pdf: {
      loading: 'Loading',
      downloadForAll: 'Download to see all pages',
      firstPagePreview: 'First page preview',
      pageLoadFailed: 'Page failed to load',
      pageLoading: '$t(preview.pdf.loading)',
    },
  },
  notification: {
    color: {
      RGBA: {
        invalid: 'Invalid RGBA color format',
      },
    },
    general: {
      composeAccessNotAllowed: 'Not allowed to access Compose',
    },
    namespace: {
      saveFailed: 'Could not save this namespace',
      deleteFailed: 'Could not delete this namespace',
      createFailed: 'Could not create namespace',
      saved: 'Namespace saved',
    },
    field: {
      unsupportedKind: 'Unsupported field kind {{kind}}',
      missingRequired: 'Missing value on required field',
      unknownFieldKind: 'Error: Unknown field kind "{{kind}}", no viewer component found.',
    },
    page: {
      pageMoveFailed: 'Could not move this page',
      createFailed: 'Could not create a page',
      loadFailed: 'Could not load the page tree',
      saveFailed: 'Could not save this page',
      deleteFailed: 'Could not delete this page',
      noPages: 'No pages found',
      reordered: 'Page reordered',
      saved: 'Page saved',
    },
    chart: {
      loadFailed: 'Could not load chart',
      saveFailed: 'Could not save this chart',
      deleteFailed: 'Could not delete this chart',
      createFailed: 'Could not create a chart',
      optionsBuildFailed: 'Could not build chart options',
      unsupportedRenderer: 'Unsupported renderer: {{version}}',
      saved: 'Chart saved',
      deleted: 'Chart deleted',
      invalidConfig: {
        missingDimensionsField: 'Dimensions field not defined',
        missingDimensionsModifier: 'Dimensions modifier not defined',
        missingMetricsField: 'Metrics field not defined',
        missingMetricsAggregate: 'Metrics aggregate not defined',
        missingMetricsType: 'Metrics chart type not defined',
        missingReports: 'Reports not defined',
        missingModuleID: 'Module not defined',
      },
    },
    record: {
      listLoadFailed: 'Could not load record list',
      createFailed: 'Could not create this record',
      deleteFailed: 'Could not delete this record',
      loadFailed: 'Could not load this record',
      updateFailed: 'Could not update this record',
      moduleOrPageNotSet: 'RecordList block error: module or page option not set',
      invalidRecordVar: 'Can not use ${record...} variable in non-record pages',
      invalidOwnerVar: 'Can not use ${ownerID} variable in non-record pages',
      moduleNotDefined: 'Record module not defined',
      unexpectedValue: 'Unexpected value for record module ({{type}})',
      unexpectedInput: 'Unexpected input for values property, should be an array with name-value object pairs',
    },
    automation: {
      saveFailed: 'Could not save this trigger',
      deleteFailed: 'Could not delete this trigger',
      execFailed: 'An error occurred while executing the trigger (see browser console for details)',
      invalidRecordID: 'Primary module set, expecting valid recordID',
      execError: 'Trigger failed to execute successfully',
      expectingRecordObject: 'Expecting Record object',
      expectingModuleObject: 'Expecting Module object',
      recordDoesNotExist: 'Record does not exist',
      saved: 'Trigger saved',
      deleted: 'Trigger deleted',
      executed: 'Trigger successfully executed',
    },
    module: {
      saveFailed: 'Could not save this module',
      deleteFailed: 'Could not delete this module',
      createFailed: 'Could not create a module',
      saved: 'Module saved',
      deleted: 'Module deleted',
    },
    import: {
      typeMissmatch: 'Import error: trying to import object of type "{{type1}}" into a list of objects of type "{{type2}}"',
      readingError: 'Error reading file',
      failed: 'Import failed',
      successful: 'Import successful',
    },
  },
}
