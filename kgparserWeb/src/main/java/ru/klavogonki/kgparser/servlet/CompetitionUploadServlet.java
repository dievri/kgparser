package ru.klavogonki.kgparser.servlet;

import ru.klavogonki.kgparser.entity.CompetitionEntity;
import ru.klavogonki.kgparser.entity.CompetitionEntityService;
import su.opencode.kefir.web.Action;
import su.opencode.kefir.web.InitiableAction;
import su.opencode.kefir.web.JsonServlet;

/**
 * Copyright 2014 <a href="mailto:dmitry.weirdo@gmail.com">Dmitriy Popov</a>.
 * $HeadURL$
 * $Author$
 * $Revision$
 * $Date::                      $
 */
public class CompetitionUploadServlet extends JsonServlet
{
	@Override
	protected Action getAction() {
		return new InitiableAction()
		{
			@Override
			public void doAction() throws Exception {
				CompetitionEntityService service = getService(CompetitionEntityService.class);

				CompetitionEntity entity = new CompetitionEntity();
				entity.setName("Название соревнования");
				entity.setLink("http://klavogonki.ru");
				entity.setComment("Коммент к соревнованию");

				entity.setZipFileData( "some zip file data".getBytes() );
				entity.setZipFileName("zipFile.zip");
				entity.setZipFileSize(666L);
				entity.setZipFileContentType("application/zip");

				entity.setCompetitionJson("{\"someField\": \"some value\"}");

				service.createCompetitionEntity(entity);
				writeSuccess();
			}
		};
	}
}