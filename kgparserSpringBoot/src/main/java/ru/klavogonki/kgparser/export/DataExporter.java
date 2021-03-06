package ru.klavogonki.kgparser.export;

/**
 * Exports data from the database to static web pages (html/js)
 * using Freemarker templates.
 */
public interface DataExporter {

    void export(ExportContext context);
}
