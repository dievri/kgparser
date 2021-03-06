/**
 * User: 1
 * Date: 13.01.2012
 * Time: 23:38:54
 */
package ru.klavogonki.kgparser;

import java.util.ArrayList;
import java.util.List;

public class ParserImpl implements Parser
{
	@Override
	public Round getRound(String fileName) {
		Round round = new Round();

		// todo: uncomment and fill
//		round.setNumber(); // todo: fill according to file name
//		round.setDictionary(); // todo: create and fill vocabulary

		List<PlayerRoundResult> results = new ArrayList<>();

		// todo: fill results
		Player player = new Player();
//		player.setProfileId(); // todo: fill from page
//		player.setName(); // todo: fill from page
//		player.setNormalRecord(); // todo: fill if possible from page

		PlayerRoundResult result = new PlayerRoundResult(round, player);
		// todo: fill result from page
		results.add(result);

		round.setResults(results);
		return round;
	}
}
